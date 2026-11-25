import t from '../strings';
import { MODES } from '../utils/answers';

// The home screen, or with `onBack` a section's own page. A section marked `ownPage` shows on the
// home screen as one card that opens that page (through `onOpenSection`).
export default function LessonList({ sections, progress, onSelect, onOpenSection, onBack }) {
  return (
    <main className="page">
      {onBack && <button type="button" className="link-button" onClick={onBack}>{t.back}</button>}
      {sections.map((section) =>
        section.ownPage && onOpenSection ? (
          <SectionCard key={section.id} section={section} progress={progress} onOpen={() => onOpenSection(section.id)} />
        ) : (
          <SectionLessons key={section.id} section={section} progress={progress} onSelect={onSelect} />
        )
      )}
    </main>
  );
}

function SectionCard({ section, progress, onOpen }) {
  const practised = section.lessons.filter((lesson) => progress[lesson.id]).length;
  return (
    <section className="lesson-section">
      <button type="button" className="lesson-card section-card" onClick={onOpen}>
        <span className="lesson-icon" aria-hidden="true">{section.icon}</span>
        <span className="lesson-text">
          <span className="lesson-number">{t.lessonCount(section.lessons.length)}</span>
          <span className="lesson-title">{section.title}</span>
          <span className="section-description">{section.description}</span>
          {practised > 0 && <span className="lesson-best">✓ {t.practised(practised, section.lessons.length)}</span>}
        </span>
        <span className="section-arrow" aria-hidden="true">→</span>
      </button>
    </section>
  );
}

function SectionLessons({ section, progress, onSelect }) {
  return (
    <section className="lesson-section" aria-labelledby={`section-${section.id}`}>
      <h2 className="section-heading" id={`section-${section.id}`}>{section.title}</h2>
      <p className="section-description">{section.description}</p>
      <ul className="lesson-list">
        {section.lessons.map((lesson, index) => {
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
    </section>
  );
}
