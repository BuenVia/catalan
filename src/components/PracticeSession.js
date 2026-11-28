import { useEffect, useRef, useState } from 'react';
import t from '../strings';
import { ACCENTS_ONLY, CORRECT, checkAnswer, checkSpoken } from '../utils/answers';
import { shuffle } from '../utils/shuffle';
import { playCatalan } from '../utils/speech';
import TextAnswer from './exercises/TextAnswer';
import ListenPrompt from './exercises/ListenPrompt';
import SpeakPrompt from './exercises/SpeakPrompt';

// One round in one mode, as in BarceLang: every sentence once (or a random `roundSize` of them),
// in a random order. The score is the number answered correctly. `onAnswer(exercise, passed)` is
// called as each answer is checked, and `onRoundComplete()` once the last one has been.
//   translate  read the English, type the Catalan (any accepted wording passes)
//   listen     hear the Catalan, type exactly what was said
//   speak      read the English, say the Catalan (any accepted wording passes)
export default function PracticeSession({
  exercises,
  roundSize = exercises.length,
  mode,
  onAnswer = () => {},
  onRoundComplete = () => {},
  onFinish,
  onExit,
}) {
  const [queue] = useState(() => shuffle(exercises).slice(0, roundSize));
  const [position, setPosition] = useState(0);
  const [value, setValue] = useState('');
  // The recogniser's guesses at the last spoken attempt, best first, waiting to be submitted.
  const [heard, setHeard] = useState([]);
  const [verdict, setVerdict] = useState(null);
  const [score, setScore] = useState(0);
  const nextRef = useRef(null);

  const total = queue.length;
  const exercise = queue[position];
  const isLast = position + 1 === total;
  const canSubmit = mode === 'speak' ? heard.length > 0 : Boolean(value.trim());

  useEffect(() => {
    if (verdict) nextRef.current?.focus();
  }, [verdict]);

  function submit() {
    if (verdict || !canSubmit) return;
    let result;
    if (mode === 'speak') {
      result = checkSpoken(exercise, heard);
      // Show the guess that passed, or otherwise the recogniser's best one.
      setValue(heard.find((guess) => checkSpoken(exercise, [guess]) === CORRECT) ?? heard[0]);
    } else {
      result = checkAnswer(exercise, value, mode);
    }
    setVerdict(result);
    if (result === CORRECT) setScore((s) => s + 1);
    onAnswer(exercise, result === CORRECT);
    if (isLast) onRoundComplete();
  }

  function next() {
    if (isLast) {
      onFinish({ correct: score, total });
      return;
    }
    setPosition((p) => p + 1);
    setValue('');
    setHeard([]);
    setVerdict(null);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (verdict) next();
    else submit();
  }

  return (
    <form className="session" onSubmit={handleSubmit}>
      <div className="session-top">
        <button type="button" className="close-button" onClick={onExit} aria-label={t.exit}>✕</button>
        <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={position}>
          <div className="progress-fill" style={{ width: `${(position / total) * 100}%` }} />
        </div>
      </div>

      <div className="session-body" key={exercise.id}>
        <p className="lesson-number">{t.sentenceOf(position + 1, total)}</p>
        <h2 className="instruction">{t.instructions[mode]}</h2>

        {mode !== 'listen' && <p className="prompt">{exercise.english}</p>}
        {mode === 'listen' && <ListenPrompt exercise={exercise} autoPlay={!verdict} />}

        {mode === 'speak' ? (
          <SpeakPrompt
            heard={heard[0]}
            answered={Boolean(verdict)}
            onListen={() => setHeard([])}
            onHeard={setHeard}
          />
        ) : (
          <TextAnswer value={value} onChange={setValue} disabled={Boolean(verdict)} placeholder={t.answerPlaceholder} />
        )}
      </div>

      <div className={`session-footer ${verdict ? (verdict === CORRECT ? 'is-correct' : 'is-wrong') : ''}`}>
        {verdict && (
          <div className="feedback" role="status">
            <strong>{verdict === CORRECT ? t.correct : t.incorrect}</strong>
            {verdict === ACCENTS_ONLY && <p>{t.accentsOnly}</p>}
            {mode === 'speak' && <p>{t.heard(value)}</p>}
            <p className="feedback-answer" lang="ca">{exercise.answer}</p>
            <p>{exercise.english}</p>
            {mode === 'speak' && (
              <button
                type="button"
                className="secondary-button feedback-play"
                onClick={() => playCatalan({ text: exercise.answer, audioSrc: exercise.audioSrc })}
              >
                {t.hearIt}
              </button>
            )}
          </div>
        )}
        {verdict ? (
          <button ref={nextRef} type="submit" className="primary-button">
            {isLast ? t.seeResults : t.nextSentence}
          </button>
        ) : (
          <button type="submit" className="primary-button" disabled={!canSubmit}>{t.submit}</button>
        )}
      </div>
    </form>
  );
}
