// The Supabase tables that BarceLang also uses, through PostgREST, so both apps share one set of
// progress. Only the publishable key is used: row level security decides what it may do.
//   review_card   (exercise_id, mode) → repetitions, interval_days, ease, due_at
//   lesson_round  (lesson_id, mode) → completed_at, the first finished round in that mode
// Modes are stored as BarceLang names them: TRANSLATE, LISTEN, SPEAK.

const PAGE_SIZE = 1000;
const TIMEOUT_MS = 15000;

const toRemoteMode = (mode) => mode.toUpperCase();
const fromRemoteMode = (mode) => mode.toLowerCase();

export const cardToRow = (card) => ({
  exercise_id: card.exerciseId,
  mode: toRemoteMode(card.mode),
  repetitions: card.repetitions,
  interval_days: card.intervalDays,
  ease: card.ease,
  due_at: new Date(card.dueAt).toISOString(),
});

export const cardFromRow = (row) => ({
  exerciseId: row.exercise_id,
  mode: fromRemoteMode(row.mode),
  repetitions: row.repetitions,
  intervalDays: row.interval_days,
  ease: row.ease,
  dueAt: Date.parse(row.due_at),
});

export const roundToRow = (round) => ({
  lesson_id: round.lessonId,
  mode: toRemoteMode(round.mode),
  completed_at: new Date(round.completedAt).toISOString(),
});

export const roundFromRow = (row) => ({
  lessonId: row.lesson_id,
  mode: fromRemoteMode(row.mode),
  completedAt: Date.parse(row.completed_at),
});

// Settings come from .env.local (see README). Without them the app keeps its progress in this
// browser only.
export function createSupabaseClient(
  baseUrl = process.env.REACT_APP_SUPABASE_URL,
  key = process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY
) {
  if (!baseUrl || !key) return null;
  const restUrl = baseUrl.replace(/\/+$/, '').replace(/\/rest\/v1$/, '') + '/rest/v1/';

  async function send(method, path, body, prefer) {
    const headers = { apikey: key, Accept: 'application/json' };
    if (prefer) headers.Prefer = prefer;
    if (body !== undefined) headers['Content-Type'] = 'application/json';
    const response = await fetch(restUrl + path, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: AbortSignal.timeout?.(TIMEOUT_MS),
    });
    if (!response.ok) {
      throw new Error(`Supabase ${method} ${path} failed with ${response.status}: ${await response.text()}`);
    }
    const text = await response.text();
    return text ? JSON.parse(text) : null;
  }

  // Every row, a page at a time. The server caps how many rows one request returns, so pages
  // continue until an empty one rather than until a short one.
  async function fetchAll(table, order) {
    const rows = [];
    for (;;) {
      const page = await send('GET', `${table}?select=*&order=${order}&limit=${PAGE_SIZE}&offset=${rows.length}`);
      if (page.length === 0) return rows;
      rows.push(...page);
    }
  }

  return {
    fetchCards: async () => (await fetchAll('review_card', 'exercise_id,mode')).map(cardFromRow),
    fetchRounds: async () => (await fetchAll('lesson_round', 'lesson_id,mode')).map(roundFromRow),

    // Later answers replace earlier ones, so a card's newest schedule wins.
    async upsertCards(cards) {
      if (cards.length === 0) return;
      await send(
        'POST',
        'review_card?on_conflict=exercise_id,mode',
        cards.map(cardToRow),
        'resolution=merge-duplicates,return=minimal'
      );
    },

    // A lesson keeps the date of its first round in each mode, so a repeat is ignored.
    async insertRounds(rounds) {
      if (rounds.length === 0) return;
      await send(
        'POST',
        'lesson_round?on_conflict=lesson_id,mode',
        rounds.map(roundToRow),
        'resolution=ignore-duplicates,return=minimal'
      );
    },
  };
}
