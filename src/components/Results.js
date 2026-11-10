import t from '../strings';

export default function Results({ lesson, correct, total, onRetry, onHome }) {
  const ratio = correct / total;
  const emoji = ratio === 1 ? '🏆' : ratio >= 0.7 ? '🎉' : '💪';
  return (
    <main className="page results">
      <div className="results-emoji" aria-hidden="true">{emoji}</div>
      <h2>{t.resultsTitle}</h2>
      <p lang="ca" className="results-lesson">{lesson.title}</p>
      <p className="results-score">{t.score(correct, total)}</p>
      <div className="results-actions">
        <button type="button" className="primary-button" onClick={onRetry}>{t.retry}</button>
        <button type="button" className="secondary-button" onClick={onHome}>{t.toLessons}</button>
      </div>
    </main>
  );
}
