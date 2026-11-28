import t from '../strings';
import { REVIEWED_MODES, daysToNextReview, due, nextSession } from '../utils/review';

// The top of a module's page: how many of its sentences are due for review in each reviewed mode,
// with a button to review them. `cards` are the module's cards in the reviewed modes.
export default function ReviewPanel({ cards, now, status, onReview }) {
  const dueCounts = Object.fromEntries(REVIEWED_MODES.map((mode) => [mode, due(cards, mode, now).length]));
  const totalDue = REVIEWED_MODES.reduce((sum, mode) => sum + dueCounts[mode], 0);

  return (
    <section className="practice-panel review-panel" aria-labelledby="review-heading">
      <h3 className="practice-heading" id="review-heading">{t.review}</h3>
      {totalDue > 0 ? (
        <>
          <p className="note">{t.reviewsDue(totalDue)}</p>
          {REVIEWED_MODES.filter((mode) => dueCounts[mode] > 0).map((mode, i) => (
            <button
              key={mode}
              type="button"
              className={i === 0 ? 'primary-button' : 'secondary-button'}
              onClick={() => onReview(mode, nextSession(cards, mode, now))}
            >
              {t.reviewMode[mode]} ({dueCounts[mode]})
            </button>
          ))}
        </>
      ) : (
        <p className="note">{cards.length > 0 ? t.allCaughtUp(daysToNextReview(cards, now)) : t.noReviewsYet}</p>
      )}
      {status === 'offline' && <p className="note">{t.syncOffline}</p>}
    </section>
  );
}
