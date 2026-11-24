import t from '../strings';
import { MODES } from '../utils/answers';
import { canRecognizeSpeech } from '../utils/recognition';
import { speak } from '../utils/speech';
import Markdown from './Markdown';

// The explanation, then a button per practice mode, then every sentence with its English.
export default function LessonScreen({ lesson, progress, onPractise, onBack }) {
  const modes = MODES.filter((mode) => mode !== 'speak' || canRecognizeSpeech);
  return (
    <main className="page">
      <button type="button" className="link-button" onClick={onBack}>{t.back}</button>
      <p className="lesson-number">{lesson.level} · {lesson.category}</p>
      <h2 className="intro-title">
        <span aria-hidden="true">{lesson.icon}</span> {lesson.title}
      </h2>

      <Markdown text={lesson.explanation} />

      <section className="practice-panel">
        <h3 className="practice-heading">{t.practise(lesson.exercises.length)}</h3>
        {modes.map((mode, i) => {
          const best = progress?.[mode];
          return (
            <button
              key={mode}
              type="button"
              className={i === 0 ? 'primary-button' : 'secondary-button'}
              onClick={() => onPractise(mode)}
            >
              {t.modes[mode]}
              {best && <span className="mode-best"> · ✓ {t.best(best.correct, best.total)}</span>}
            </button>
          );
        })}
        {!canRecognizeSpeech && <p className="note">{t.noRecognition}</p>}
      </section>

      <h3 className="section-heading">{t.sentencesHeading}</h3>
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
    </main>
  );
}
