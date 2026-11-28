// Review cards and lesson rounds, shared with BarceLang through Supabase. As in BarceLang's
// ReviewStore.kt, Supabase holds the progress and this browser keeps a copy of it in localStorage,
// so screens read and write locally without waiting on the network or needing a connection. Every
// write is queued and uploaded as soon as possible, and sync() uploads anything still queued, then
// takes Supabase's rows. Without a Supabase client, progress stays in this browser.
import { REVIEWED_MODES, afterAnswer, cardKey, newCard } from './review';

const STORAGE_KEY = 'catalan-review-v1';
const CARD = 'card';
const ROUND = 'round';

const pendingKey = (kind, key, mode) => `${kind}|${key}|${mode}`;

function load(storage) {
  try {
    const saved = JSON.parse(storage.getItem(STORAGE_KEY));
    if (saved) return { cards: saved.cards ?? {}, rounds: saved.rounds ?? {}, pending: saved.pending ?? {} };
  } catch {
    // Unreadable or unavailable: start empty, and Supabase fills it in.
  }
  return { cards: {}, rounds: {}, pending: {} };
}

// The state the screens see: { cards: [...], rounds: [...], status }, where status is 'local' (no
// Supabase settings), 'syncing', 'synced' or 'offline' (the last sync failed and will be retried).
export function createReviewStore({ client, storage = window.localStorage, clock = () => new Date() }) {
  let data = load(storage);
  let status = client ? 'syncing' : 'local';
  let snapshot = null;
  const listeners = new Set();
  // One sync at a time, so two uploads can't race to clear the same queue entries.
  let lock = Promise.resolve();

  function save() {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Storage full or unavailable: the queue still uploads while the page is open.
    }
  }

  function changed() {
    snapshot = null;
    save();
    listeners.forEach((listener) => listener());
  }

  function setStatus(next) {
    if (next === status) return;
    status = next;
    snapshot = null;
    listeners.forEach((listener) => listener());
  }

  // A new value on every write, so an upload only clears an entry if nothing has changed the row
  // since it was read.
  function queue(kind, key, mode) {
    data.pending[pendingKey(kind, key, mode)] = { kind, key, mode, queuedAt: Math.random() };
  }

  async function runSync(pull) {
    if (!client) return;
    try {
      const entries = Object.entries(data.pending);
      const cards = entries
        .filter(([, entry]) => entry.kind === CARD)
        .map(([, entry]) => data.cards[cardKey(entry.key, entry.mode)])
        .filter(Boolean);
      const rounds = entries
        .filter(([, entry]) => entry.kind === ROUND)
        .map(([, entry]) => data.rounds[cardKey(entry.key, entry.mode)])
        .filter(Boolean);
      await client.upsertCards(cards);
      await client.insertRounds(rounds);
      for (const [key, entry] of entries) {
        if (data.pending[key]?.queuedAt === entry.queuedAt) delete data.pending[key];
      }
      changed();

      if (pull) {
        const [remoteCards, remoteRounds] = await Promise.all([client.fetchCards(), client.fetchRounds()]);
        // Takes Supabase's cards, except where this browser has an answer still to upload, which is
        // newer. Cards only in this browser are kept: deleting is never needed.
        for (const card of remoteCards) {
          if (data.pending[pendingKey(CARD, card.exerciseId, card.mode)]) continue;
          data.cards[cardKey(card.exerciseId, card.mode)] = card;
        }
        // Keeps the earlier date when both sides have a round, as the first round is what counts.
        for (const round of remoteRounds) {
          const key = cardKey(round.lessonId, round.mode);
          const local = data.rounds[key];
          if (!local || round.completedAt < local.completedAt) data.rounds[key] = round;
        }
        changed();
      }
      setStatus('synced');
    } catch (error) {
      console.warn('Sync with Supabase failed; will retry', error);
      setStatus('offline');
    }
  }

  function sync(pull) {
    lock = lock.then(() => runSync(pull));
    return lock;
  }

  return {
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },

    getSnapshot() {
      if (!snapshot) {
        snapshot = { cards: Object.values(data.cards), rounds: Object.values(data.rounds), status };
      }
      return snapshot;
    },

    // Does nothing for a mode that isn't reviewed.
    recordAnswer(exerciseId, mode, passed) {
      if (!REVIEWED_MODES.includes(mode)) return;
      const key = cardKey(exerciseId, mode);
      data.cards[key] = afterAnswer(data.cards[key] ?? newCard(exerciseId, mode), passed, clock());
      queue(CARD, exerciseId, mode);
      changed();
      sync(false);
    },

    // Only a lesson's first round in a mode is kept and uploaded, since later ones change nothing.
    recordRoundFinished(lessonId, mode) {
      const key = cardKey(lessonId, mode);
      if (data.rounds[key]) return;
      data.rounds[key] = { lessonId, mode, completedAt: clock().getTime() };
      queue(ROUND, lessonId, mode);
      changed();
      sync(false);
    },

    // Uploads what's queued, then takes Supabase's rows. Offline, it fails quietly and the queue
    // waits for the next time.
    sync: () => sync(true),
  };
}
