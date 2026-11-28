import { createReviewStore } from './reviewStore';

// An in-memory stand-in for Supabase, so these tests never reach the real database.
function fakeClient({ cards = [], rounds = [] } = {}) {
  return {
    cards,
    rounds,
    uploadedCards: [],
    uploadedRounds: [],
    failing: false,
    async fetchCards() {
      if (this.failing) throw new Error('offline');
      return this.cards;
    },
    async fetchRounds() {
      if (this.failing) throw new Error('offline');
      return this.rounds;
    },
    async upsertCards(list) {
      if (this.failing && list.length) throw new Error('offline');
      this.uploadedCards.push(...list);
    },
    async insertRounds(list) {
      if (this.failing && list.length) throw new Error('offline');
      this.uploadedRounds.push(...list);
    },
  };
}

const now = new Date(2026, 10, 28, 15, 30);
let storage;

beforeEach(() => {
  const items = {};
  storage = { getItem: (k) => items[k] ?? null, setItem: (k, v) => (items[k] = v) };
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});

afterEach(() => jest.restoreAllMocks());

it('takes Supabase’s cards and rounds on sync, keeping the earlier round', async () => {
  const remoteCard = { exerciseId: 'ca-a1-001', mode: 'translate', repetitions: 2, intervalDays: 3, ease: 2.5, dueAt: 5 };
  const client = fakeClient({
    cards: [remoteCard],
    rounds: [{ lessonId: 'ca-a1-lesson-01', mode: 'listen', completedAt: 50 }],
  });
  const store = createReviewStore({ client, storage, clock: () => now });
  expect(store.getSnapshot().status).toBe('syncing');

  await store.sync();
  expect(store.getSnapshot()).toMatchObject({ cards: [remoteCard], status: 'synced' });
  expect(store.getSnapshot().rounds).toEqual([{ lessonId: 'ca-a1-lesson-01', mode: 'listen', completedAt: 50 }]);
  expect(client.uploadedCards).toEqual([]);
  expect(client.uploadedRounds).toEqual([]);
});

it('uploads each answer and a lesson’s first round in a mode only', async () => {
  const client = fakeClient();
  const store = createReviewStore({ client, storage, clock: () => now });

  store.recordAnswer('ca-a1-001', 'translate', true);
  store.recordAnswer('ca-a1-002', 'speak', true); // speaking isn't reviewed
  store.recordRoundFinished('ca-a1-lesson-01', 'translate');
  store.recordRoundFinished('ca-a1-lesson-01', 'translate');
  await store.sync();

  expect(client.uploadedCards).toEqual([
    expect.objectContaining({ exerciseId: 'ca-a1-001', mode: 'translate', repetitions: 1, intervalDays: 1 }),
  ]);
  expect(client.uploadedRounds).toEqual([
    { lessonId: 'ca-a1-lesson-01', mode: 'translate', completedAt: now.getTime() },
  ]);
});

it('keeps answers given offline, and uploads them on the next sync before taking Supabase’s', async () => {
  const stale = { exerciseId: 'ca-a1-001', mode: 'listen', repetitions: 0, intervalDays: 0, ease: 2.5, dueAt: 0 };
  const client = fakeClient({ cards: [stale] });
  client.failing = true;
  const store = createReviewStore({ client, storage, clock: () => now });

  store.recordAnswer('ca-a1-001', 'listen', true);
  await store.sync();
  expect(store.getSnapshot().status).toBe('offline');

  // The answer survives a reload, because it's saved in storage.
  const reloaded = createReviewStore({ client, storage, clock: () => now });
  client.failing = false;
  await reloaded.sync();
  expect(client.uploadedCards).toEqual([expect.objectContaining({ exerciseId: 'ca-a1-001', repetitions: 1 })]);
  expect(reloaded.getSnapshot().status).toBe('synced');
});

it('doesn’t let Supabase overwrite an answer that is still waiting to upload', async () => {
  const stale = { exerciseId: 'ca-a1-001', mode: 'listen', repetitions: 0, intervalDays: 0, ease: 2.5, dueAt: 0 };
  const client = fakeClient({ cards: [stale] });
  // Uploads fail but reads work.
  client.upsertCards = async (list) => {
    if (list.length) throw new Error('rejected');
  };
  const store = createReviewStore({ client, storage, clock: () => now });
  store.recordAnswer('ca-a1-001', 'listen', true);
  await store.sync();
  expect(store.getSnapshot().cards).toEqual([expect.objectContaining({ repetitions: 1 })]);
});

it('stays in this browser without Supabase settings', async () => {
  const store = createReviewStore({ client: null, storage, clock: () => now });
  store.recordAnswer('ca-a1-001', 'translate', false);
  await store.sync();
  expect(store.getSnapshot()).toMatchObject({ status: 'local', cards: [expect.objectContaining({ repetitions: 0 })] });
});
