import { useEffect, useRef, useState } from 'react';
import t from '../strings';
import { checkAnswer } from '../utils/answers';
import { shuffle } from '../utils/shuffle';
import TranslateExercise from './exercises/TranslateExercise';
import SelectExercise from './exercises/SelectExercise';
import ListenExercise from './exercises/ListenExercise';

const EXERCISE_COMPONENTS = {
  translate: TranslateExercise,
  select: SelectExercise,
  listen: ListenExercise,
};

// Shuffle the exercises (and the options of select exercises) for each attempt.
function prepareQueue(exercises) {
  return shuffle(
    exercises.map((exercise, id) => ({
      ...exercise,
      id,
      options: exercise.options && shuffle(exercise.options),
    }))
  );
}

// Runs one attempt at a lesson. Like Duolingo, an exercise answered wrongly is put back at
// the end of the queue, so the lesson ends only when every exercise has been answered correctly.
// The score is the number of exercises answered correctly on the first try.
export default function ExerciseSession({ lesson, onFinish, onExit }) {
  const [queue, setQueue] = useState(() => prepareQueue(lesson.exercises));
  const [position, setPosition] = useState(0);
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);
  const [completed, setCompleted] = useState(0);
  const [missed, setMissed] = useState(() => new Set());
  const continueRef = useRef(null);

  const total = lesson.exercises.length;
  const exercise = queue[position];
  const Exercise = EXERCISE_COMPONENTS[exercise.type];

  useEffect(() => {
    if (result) continueRef.current?.focus();
  }, [result]);

  function check() {
    const outcome = checkAnswer(exercise, value);
    setResult(outcome);
    if (outcome.status === 'wrong') {
      setQueue((q) => [...q, exercise]);
      setMissed((m) => new Set(m).add(exercise.id));
    } else {
      setCompleted((c) => c + 1);
    }
  }

  function next() {
    if (position + 1 >= queue.length) {
      onFinish({ correct: total - missed.size, total });
      return;
    }
    setPosition((p) => p + 1);
    setValue('');
    setResult(null);
  }

  // "Can't listen now": counts the exercise as done without asking for an answer.
  function skip() {
    setCompleted((c) => c + 1);
    next();
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (result) next();
    else if (value.trim()) check();
  }

  return (
    <form className="session" onSubmit={handleSubmit}>
      <div className="session-top">
        <button type="button" className="close-button" onClick={onExit} aria-label={t.exit}>✕</button>
        <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={completed}>
          <div className="progress-fill" style={{ width: `${(completed / total) * 100}%` }} />
        </div>
      </div>

      <div className="session-body">
        <Exercise
          key={position}
          exercise={exercise}
          value={value}
          onChange={setValue}
          onSkip={skip}
          disabled={Boolean(result)}
        />
      </div>

      <div className={`session-footer ${result ? `is-${result.status}` : ''}`}>
        {result && (
          <div className="feedback" role="status">
            {result.status === 'wrong' ? (
              <strong>{t.wrong}</strong>
            ) : (
              <strong>{t.correct}</strong>
            )}
            {result.status === 'typo' && <span> {t.typo}</span>}
            {result.status !== 'correct' && <span className="feedback-answer" lang="ca"> {result.expected}</span>}
          </div>
        )}
        {result ? (
          <button ref={continueRef} type="submit" className="primary-button">{t.continue}</button>
        ) : (
          <button type="submit" className="primary-button" disabled={!value.trim()}>{t.check}</button>
        )}
      </div>
    </form>
  );
}
