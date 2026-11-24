import t from '../strings';
import { MODES } from '../utils/answers';

export default function LessonList({ lessons, progress, onSelect }) {
  return (
    <main className="page">
      <h2 className="section-heading">{t.lessonsHeading}</h2>
      <ul className="lesson-list">
        {lessons.map((lesson, index) => {
          const results = MODES.filter((mode) => progress[lesson.id]?.[mode]);
          return (
            <li key={lesson.id}>
              <button type="button" className="lesson-card" onClick={() => onSelect(lesson.id)}>
                <span className="lesson-icon" aria-hidden="true">{lesson.icon}</span>
                <span className="lesson-text">
                  <span className="lesson-number">{t.lessonNumber(index + 1)} · {lesson.category}</span>
                  <span className="lesson-title">{lesson.title}</span>
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
    </main>
  );
}
