import { afterAnswer, cardsIn, daysToNextReview, due, lessonCompletionTimes, newCard, nextSession } from './review';

// Mid-afternoon, so the start of the day is unambiguous in any time zone the tests run in.
const now = new Date(2026, 10, 28, 15, 30);
const startOfDayIn = (days) => new Date(2026, 10, 28 + days).getTime();

describe('afterAnswer', () => {
  it('climbs the intervals 1, 3, then interval × ease, due from the start of the day', () => {
    let card = afterAnswer(newCard('ca-a1-001', 'translate'), true, now);
    expect(card).toMatchObject({ repetitions: 1, intervalDays: 1, ease: 2.5, dueAt: startOfDayIn(1) });

    card = afterAnswer(card, true, new Date(card.dueAt));
    expect(card).toMatchObject({ repetitions: 2, intervalDays: 3 });

    card = afterAnswer(card, true, new Date(card.dueAt));
    expect(card).toMatchObject({ repetitions: 3, intervalDays: 8 }); // ceil(3 × 2.5)
  });

  it('changes nothing when a card is passed before it is due', () => {
    const card = { ...newCard('ca-a1-001', 'listen'), repetitions: 2, intervalDays: 3, dueAt: startOfDayIn(2) };
    expect(afterAnswer(card, true, now)).toBe(card);
  });

  it('brings a missed card back in ten minutes and lowers ease only on a lapse', () => {
    const fresh = afterAnswer(newCard('ca-a1-001', 'translate'), false, now);
    expect(fresh).toMatchObject({ repetitions: 0, intervalDays: 0, ease: 2.5, dueAt: now.getTime() + 600000 });

    const learnt = { ...newCard('ca-a1-001', 'translate'), repetitions: 3, intervalDays: 8, dueAt: startOfDayIn(5) };
    expect(afterAnswer(learnt, false, now)).toMatchObject({ repetitions: 0, intervalDays: 0, ease: 2.3 });

    const hard = { ...learnt, ease: 1.35 };
    expect(afterAnswer(hard, false, now).ease).toBe(1.3);
  });

  it('caps the interval at a year', () => {
    const card = { ...newCard('ca-a1-001', 'translate'), repetitions: 6, intervalDays: 300, dueAt: 0 };
    expect(afterAnswer(card, true, now).intervalDays).toBe(365);
  });
});

describe('due cards', () => {
  const cards = [
    { ...newCard('a', 'translate'), dueAt: now.getTime() - 1000 },
    { ...newCard('b', 'translate'), dueAt: now.getTime() + 1000 },
    { ...newCard('c', 'listen'), dueAt: 0 },
    { ...newCard('d', 'speak'), dueAt: 0 },
    { ...newCard('es-b2-001', 'translate'), dueAt: 0 },
  ];

  it('keeps a module’s cards in the reviewed modes only', () => {
    const module = cardsIn(cards, new Set(['a', 'b', 'c', 'd']));
    expect(module.map((c) => c.exerciseId)).toEqual(['a', 'b', 'c']);
  });

  it('counts what is due in each mode, and reviews at most 20, longest waiting first', () => {
    expect(due(cards, 'translate', now).map((c) => c.exerciseId)).toEqual(['a', 'es-b2-001']);
    const many = Array.from({ length: 25 }, (_, i) => ({ ...newCard(`x${i}`, 'listen'), dueAt: 25 - i }));
    const session = nextSession(many, 'listen', now);
    expect(session).toHaveLength(20);
    expect(new Set(session)).toEqual(new Set(many.slice(5).map((c) => c.exerciseId)));
  });

  it('says how many days away the next review is', () => {
    expect(daysToNextReview([], now)).toBeNull();
    expect(daysToNextReview([{ dueAt: now.getTime() + 60000 }], now)).toBe(0);
    expect(daysToNextReview([{ dueAt: startOfDayIn(1) }, { dueAt: startOfDayIn(4) }], now)).toBe(1);
  });
});

it('counts a lesson as completed once it has a writing and a listening round', () => {
  const times = lessonCompletionTimes([
    { lessonId: 'one', mode: 'translate', completedAt: 100 },
    { lessonId: 'one', mode: 'listen', completedAt: 300 },
    { lessonId: 'two', mode: 'translate', completedAt: 200 },
    { lessonId: 'two', mode: 'speak', completedAt: 400 },
  ]);
  expect([...times]).toEqual([['one', 300]]);
});
