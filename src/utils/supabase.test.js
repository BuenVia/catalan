import { createSupabaseClient } from './supabase';

// fetch is mocked throughout, so nothing here reaches the real database.
let requests;
let responses;

beforeEach(() => {
  requests = [];
  responses = [];
  global.fetch = jest.fn(async (url, options) => {
    requests.push({ url, ...options });
    const body = responses.shift() ?? '';
    return { ok: true, status: 200, text: async () => body };
  });
});

afterEach(() => {
  delete global.fetch;
});

it('is missing without settings', () => {
  expect(createSupabaseClient('', '')).toBeNull();
});

it('reads every page of cards, with modes and dates as BarceLang stores them', async () => {
  const client = createSupabaseClient('https://example.supabase.co/rest/v1/', 'sb_publishable_test');
  responses.push(
    JSON.stringify([
      { exercise_id: 'ca-a1-051', mode: 'TRANSLATE', repetitions: 4, interval_days: 20, ease: 2.5, due_at: '2026-12-15T23:00:00+00:00' },
    ]),
    '[]'
  );
  expect(await client.fetchCards()).toEqual([
    { exerciseId: 'ca-a1-051', mode: 'translate', repetitions: 4, intervalDays: 20, ease: 2.5, dueAt: Date.UTC(2026, 11, 15, 23) },
  ]);
  expect(requests.map((r) => r.url)).toEqual([
    'https://example.supabase.co/rest/v1/review_card?select=*&order=exercise_id,mode&limit=1000&offset=0',
    'https://example.supabase.co/rest/v1/review_card?select=*&order=exercise_id,mode&limit=1000&offset=1',
  ]);
  expect(requests[0]).toMatchObject({ method: 'GET', headers: { apikey: 'sb_publishable_test' } });
});

it('upserts cards and inserts rounds the way BarceLang does', async () => {
  const client = createSupabaseClient('https://example.supabase.co', 'key');
  await client.upsertCards([
    { exerciseId: 'ca-a1-001', mode: 'listen', repetitions: 1, intervalDays: 1, ease: 2.5, dueAt: Date.UTC(2026, 10, 29) },
  ]);
  await client.insertRounds([{ lessonId: 'ca-a1-lesson-01', mode: 'translate', completedAt: Date.UTC(2026, 10, 28, 12) }]);
  await client.upsertCards([]);

  expect(requests).toHaveLength(2);
  expect(requests[0]).toMatchObject({
    method: 'POST',
    url: 'https://example.supabase.co/rest/v1/review_card?on_conflict=exercise_id,mode',
    headers: { Prefer: 'resolution=merge-duplicates,return=minimal', 'Content-Type': 'application/json' },
  });
  expect(JSON.parse(requests[0].body)).toEqual([
    { exercise_id: 'ca-a1-001', mode: 'LISTEN', repetitions: 1, interval_days: 1, ease: 2.5, due_at: '2026-11-29T00:00:00.000Z' },
  ]);
  expect(requests[1]).toMatchObject({
    url: 'https://example.supabase.co/rest/v1/lesson_round?on_conflict=lesson_id,mode',
    headers: { Prefer: 'resolution=ignore-duplicates,return=minimal' },
  });
  expect(JSON.parse(requests[1].body)).toEqual([
    { lesson_id: 'ca-a1-lesson-01', mode: 'TRANSLATE', completed_at: '2026-11-28T12:00:00.000Z' },
  ]);
});
