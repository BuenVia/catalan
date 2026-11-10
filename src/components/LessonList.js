import t from '../strings';

export default function LessonList({ lessons, progress, onSelect }) {
  return (
    <main className="page">
      <h2 className="section-heading">{t.lessonsHeading}</h2>
      <ul className="lesson-list">
        {lessons.map((lesson, index) => {
          const best = progress[lesson.id];
          return (
            <li key={lesson.id}>
              <button type="button" className="lesson-card" onClick={() => onSelect(lesson.id)}>
                <span className="lesson-icon" aria-hidden="true">{lesson.icon}</span>
                <span className="lesson-text">
                  <span className="lesson-number">{t.lessonNumber(index + 1)}</span>
                  <span className="lesson-title" lang="ca">{lesson.title}</span>
                  <span className="lesson-subtitle">{lesson.subtitle}</span>
                  {best && <span className="lesson-best">✓ {t.best(best.correct, best.total)}</span>}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
