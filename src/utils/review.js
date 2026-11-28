// Spaced repetition, ported from BarceLang's Review.kt so that both apps schedule the same cards in
// the same way. A card is the schedule for one sentence in one mode:
//   { exerciseId, mode, repetitions, intervalDays, ease, dueAt }   (dueAt in epoch milliseconds)
// Recognising a sentence by ear doesn't mean you can produce it, so the modes are remembered
// separately. Cards are keyed on the exercise's id, so rewording a sentence keeps its schedule.
import { shuffle } from './shuffle';

const STARTING_EASE = 2.5;
const MINIMUM_EASE = 1.3;
const EASE_PENALTY = 0.2;
const MAXIMUM_INTERVAL_DAYS = 365;
const MAXIMUM_SESSION_SIZE = 20;
// A missed sentence comes back soon, then starts climbing the intervals again.
const RETRY_DELAY_MS = 10 * 60 * 1000;

// The modes that are scheduled for review. Speaking is practice only: not every browser can
// recognise speech. BarceLang may have saved cards for it, which are ignored.
export const REVIEWED_MODES = ['translate', 'listen'];

// The rounds that make a lesson completed: a finished round in each of these modes.
const COMPLETING_MODES = ['translate', 'listen'];

export const cardKey = (exerciseId, mode) => `${exerciseId}|${mode}`;

export function newCard(exerciseId, mode) {
  return { exerciseId, mode, repetitions: 0, intervalDays: 0, ease: STARTING_EASE, dueAt: 0 };
}

// The card after an answer, using a simplified SM-2. Answers are only right or wrong, so ease
// falls on a lapse and otherwise holds steady. Passing before the due date changes nothing,
// because cramming shouldn't postpone a review. Failing always counts, as it shows the sentence
// has been forgotten.
export function afterAnswer(card, passed, now) {
  const nowMs = now.getTime();
  if (!passed) {
    return {
      ...card,
      repetitions: 0,
      intervalDays: 0,
      // Only a lapse lowers ease: repeatedly missing a new sentence isn't one.
      ease: card.repetitions > 0 ? Math.max(MINIMUM_EASE, card.ease - EASE_PENALTY) : card.ease,
      dueAt: nowMs + RETRY_DELAY_MS,
    };
  }
  if (card.dueAt > nowMs) return card;

  let interval;
  if (card.repetitions === 0) interval = 1;
  else if (card.repetitions === 1) interval = 3;
  else interval = Math.max(card.intervalDays + 1, Math.ceil(card.intervalDays * card.ease));
  interval = Math.min(interval, MAXIMUM_INTERVAL_DAYS);

  return {
    ...card,
    repetitions: card.repetitions + 1,
    intervalDays: interval,
    // Due from the start of the day, so reviews don't depend on the time of day you practised.
    dueAt: new Date(now.getFullYear(), now.getMonth(), now.getDate() + interval).getTime(),
  };
}

// The cards to review for a module: its sentences, in the modes that are reviewed.
export function cardsIn(cards, exerciseIds) {
  return cards.filter((card) => exerciseIds.has(card.exerciseId) && REVIEWED_MODES.includes(card.mode));
}

export function due(cards, mode, now) {
  return cards.filter((card) => card.mode === mode && card.dueAt <= now.getTime());
}

// The longest-waiting due sentences, shuffled so that neighbours in a lesson don't cue each other.
export function nextSession(cards, mode, now) {
  const longestWaiting = [...due(cards, mode, now)].sort((a, b) => a.dueAt - b.dueAt);
  return shuffle(longestWaiting.slice(0, MAXIMUM_SESSION_SIZE).map((card) => card.exerciseId));
}

// How many days from today the next card falls due (0 or less means later today), or null when
// there are no cards.
export function daysToNextReview(cards, now) {
  if (cards.length === 0) return null;
  const dueAt = new Date(Math.min(...cards.map((card) => card.dueAt)));
  const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
  // Rounded, because a day with a daylight saving change isn't 24 hours long.
  return Math.round((startOfDay(dueAt) - startOfDay(now)) / (24 * 60 * 60 * 1000));
}

// When each completed lesson was completed: the moment it had a finished round in every completing
// mode. A round is { lessonId, mode, completedAt } and is the first one in that lesson and mode.
export function lessonCompletionTimes(rounds) {
  const byLesson = new Map();
  for (const round of rounds) {
    if (!COMPLETING_MODES.includes(round.mode)) continue;
    const modes = byLesson.get(round.lessonId) ?? new Map();
    modes.set(round.mode, round.completedAt);
    byLesson.set(round.lessonId, modes);
  }
  const times = new Map();
  for (const [lessonId, modes] of byLesson) {
    if (modes.size === COMPLETING_MODES.length) times.set(lessonId, Math.max(...modes.values()));
  }
  return times;
}
