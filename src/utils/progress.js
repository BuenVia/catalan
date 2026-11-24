// Best result per lesson and practice mode, kept in localStorage:
//   { [lessonId]: { [mode]: { correct, total } } }

const STORAGE_KEY = 'catalan-a1-progress-v2';

export function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

export function saveResult(lessonId, mode, correct, total) {
  const progress = loadProgress();
  const previous = progress[lessonId]?.[mode];
  if (!previous || correct > previous.correct || total !== previous.total) {
    progress[lessonId] = { ...progress[lessonId], [mode]: { correct, total } };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Storage unavailable (private mode etc.): progress just isn't remembered.
    }
  }
  return progress;
}
