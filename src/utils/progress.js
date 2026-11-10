// Best result per lesson, kept in localStorage: { [lessonId]: { correct, total } }.

const STORAGE_KEY = 'catalan-a1-progress';

export function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

export function saveResult(lessonId, correct, total) {
  const progress = loadProgress();
  const previous = progress[lessonId];
  if (!previous || correct > previous.correct || total !== previous.total) {
    progress[lessonId] = { correct, total };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Storage unavailable (private mode etc.) — progress just isn't remembered.
    }
  }
  return progress;
}
