import t from '../strings';
import { MODES } from '../utils/answers';
import { canRecognizeSpeech } from '../utils/recognition';
import { speak } from '../utils/speech';

export const MIXED_ROUND_SIZE = 15;

// A module's completed lessons, as in BarceLang: every one of their sentences, and buttons to
// practise a random selection of them in each mode.
export default function CompletedLessons({ section, lessons, onPractise, onBack }) {
  const modes = MODES.filter((mode) => mode !== 'speak' || canRecognizeSpeech);
  return (
    <main className="page">
      <button type="button" className="link-button" onClick={onBack}>{t.back}</button>
      <p className="lesson-number">{section.title}</p>
      <h2 className="intro-title">{t.completedLessons}</h2>

      {lessons.length === 0 ? (
        <p>{t.noCompletedLessons}</p>
      ) : (
        <>
          <section className="practice-panel">
            <h3 className="practice-heading">{t.practiseRandom(MIXED_ROUND_SIZE)}</h3>
            {modes.map((mode, i) => (
              <button
                key={mode}
                type="button"
                className={i === 0 ? 'primary-button' : 'secondary-button'}
                onClick={() => onPractise(mode)}
              >
                {t.modes[mode]}
              </button>
            ))}
            {!canRecognizeSpeech && <p className="note">{t.noRecognition}</p>}
          </section>

          {lessons.map((lesson) => (
            <section key={lesson.id} aria-labelledby={`completed-${lesson.id}`}>
              <h3 className="section-heading" id={`completed-${lesson.id}`}>
                <span aria-hidden="true">{lesson.icon}</span> {lesson.title}
              </h3>
              <ul className="sentence-list">
                {lesson.exercises.map((exercise) => (
                  <li key={exercise.id}>
                    <button
                      type="button"
                      className="speak-button"
                      onClick={() => speak(exercise.answer)}
                      aria-label={t.listenTo(exercise.answer)}
                    >
                      🔊
                    </button>
                    <span>
                      <strong lang="ca" className="sentence-ca">{exercise.answer}</strong>
                      <span className="sentence-en">{exercise.english}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </>
      )}
    </main>
  );
}
