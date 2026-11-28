import t from '../strings';
import { MODES } from '../utils/answers';
import ReviewPanel from './ReviewPanel';

// A date in the browser's own format, such as "6 Nov 2026".
const formatDate = (ms) => new Date(ms).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });

// The home screen: one button per module, each opening that module's page (through `onOpen`).
export function ModuleList({ sections, progress, onOpen }) {
  return (
    <main className="page">
      <ul className="lesson-list">
        {sections.map((section) => {
          const practised = section.lessons.filter((lesson) => progress[lesson.id]).length;
          return (
            <li key={section.id}>
              <button type="button" className="lesson-card section-card" onClick={() => onOpen(section.id)}>
                <span className="lesson-icon" aria-hidden="true">{section.icon}</span>
                <span className="lesson-text">
                  <span className="lesson-number">{t.lessonCount(section.lessons.length)}</span>
                  <span className="lesson-title">{section.title}</span>
                  <span className="section-description">{section.description}</span>
                  {practised > 0 && (
                    <span className="lesson-best">✓ {t.practised(practised, section.lessons.length)}</span>
                  )}
                </span>
                <span className="section-arrow" aria-hidden="true">→</span>
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

// A module's page: its reviews due, its completed lessons, then its lessons. `completedAt` maps a
// completed lesson's id to when it was completed.
export default function LessonList({
  section,
  progress,
  completedAt,
  reviewCards,
  now,
  syncStatus,
  onReview,
  onOpenCompleted,
  onSelect,
  onBack,
}) {
  const completedCount = section.lessons.filter((lesson) => completedAt.has(lesson.id)).length;
  return (
    <main className="page">
      <button type="button" className="link-button" onClick={onBack}>{t.back}</button>
      <section className="lesson-section" aria-labelledby={`section-${section.id}`}>
        <h2 className="section-heading" id={`section-${section.id}`}>{section.title}</h2>
        <p className="section-description">{section.description}</p>

        <ReviewPanel cards={reviewCards} now={now} status={syncStatus} onReview={onReview} />

        <button type="button" className="lesson-card section-card completed-card" onClick={onOpenCompleted}>
          <span className="lesson-icon" aria-hidden="true">✅</span>
          <span className="lesson-text">
            <span className="lesson-title">{t.completedLessons}</span>
            <span className="section-description">{t.completedSummary(completedCount)}</span>
          </span>
          <span className="section-arrow" aria-hidden="true">→</span>
        </button>

        <ul className="lesson-list">
          {section.lessons.map((lesson, index) => {
            const results = MODES.filter((mode) => progress[lesson.id]?.[mode]);
            const completed = completedAt.get(lesson.id);
            return (
              <li key={lesson.id}>
                <button
                  type="button"
                  className={`lesson-card${completed ? ' is-completed' : ''}`}
                  onClick={() => onSelect(lesson.id)}
                >
                  <span className="lesson-icon" aria-hidden="true">{lesson.icon}</span>
                  <span className="lesson-text">
                    <span className="lesson-number">{t.lessonNumber(index + 1)} · {lesson.category}</span>
                    <span className="lesson-title">{lesson.title}</span>
                    {completed && <span className="lesson-completed">{t.completedOn(formatDate(completed))}</span>}
                    {results.length > 0 && (
                      <span className="lesson-best">
                        ✓{' '}
                        {results
                          .map((mode) => {
                            const best = progress[lesson.id][mode];
                            return `${t.modeShort[mode]} ${t.best(best.correct, best.total)}`;
                          })
                          .join(' · ')}
                      </span>
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
