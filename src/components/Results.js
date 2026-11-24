import t from '../strings';

export default function Results({ lesson, mode, correct, total, onRetry, onBack }) {
  const ratio = correct / total;
  const emoji = ratio === 1 ? '🏆' : ratio >= 0.7 ? '🎉' : '💪';
  return (
    <main className="page results">
      <div className="results-emoji" aria-hidden="true">{emoji}</div>
      <p className="results-score">{correct} / {total}</p>
      <p>{t.sentencesCorrect}</p>
      <p className="results-lesson">{lesson.title} · {t.modes[mode]}</p>
      <div className="results-actions">
        <button type="button" className="primary-button" onClick={onRetry}>{t.retry}</button>
        <button type="button" className="secondary-button" onClick={onBack}>{t.backToLesson}</button>
      </div>
    </main>
  );
}
