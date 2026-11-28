import t from '../strings';

// The end of a round. A review can't be retried, since its sentences are no longer due.
export default function Results({ title, mode, correct, total, onRetry, backLabel, onBack }) {
  const ratio = correct / total;
  const emoji = ratio === 1 ? '🏆' : ratio >= 0.7 ? '🎉' : '💪';
  return (
    <main className="page results">
      <div className="results-emoji" aria-hidden="true">{emoji}</div>
      <p className="results-score">{correct} / {total}</p>
      <p>{t.sentencesCorrect}</p>
      <p className="results-lesson">{title} · {t.modes[mode]}</p>
      <div className="results-actions">
        {onRetry && <button type="button" className="primary-button" onClick={onRetry}>{t.retry}</button>}
        <button type="button" className={onRetry ? 'secondary-button' : 'primary-button'} onClick={onBack}>
          {backLabel}
        </button>
      </div>
    </main>
  );
}
