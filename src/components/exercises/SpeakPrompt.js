import { useEffect, useRef, useState } from 'react';
import t from '../../strings';
import { listen } from '../../utils/recognition';

// The microphone controls. `heard` is the best guess at the last attempt, shown so it can be
// checked before submitting, or recorded again. onListen is called as each attempt starts, and
// onHeard(guesses) once it's heard. The parent remounts this for each sentence.
export default function SpeakPrompt({ heard, answered, onListen, onHeard }) {
  const [listening, setListening] = useState(false);
  const [partial, setPartial] = useState('');
  const [problem, setProblem] = useState(null);
  const recognitionRef = useRef(null);

  useEffect(
    () => () => {
      const recognition = recognitionRef.current;
      if (!recognition) return;
      recognition.onresult = recognition.onerror = recognition.onend = null;
      recognition.abort();
    },
    []
  );

  function start() {
    if (listening) return;
    setProblem(null);
    setPartial('');
    onListen();
    setListening(true);
    recognitionRef.current = listen({
      onPartial: setPartial,
      onHeard: (guesses) => {
        setListening(false);
        onHeard(guesses);
      },
      onProblem: (code) => {
        setListening(false);
        setProblem(t.recognitionProblems[code] ?? t.recognitionProblems.other);
      },
    });
  }

  if (answered) return null;

  if (listening) {
    return (
      <div className="speak-controls">
        <p className="heard" aria-live="polite">{partial || t.listening}</p>
        <button type="button" className="secondary-button" onClick={() => recognitionRef.current?.stop()}>
          {t.doneSpeaking}
        </button>
      </div>
    );
  }

  return (
    <div className="speak-controls">
      {problem && <p className="warning" role="alert">{problem}</p>}
      {heard ? (
        <>
          <p className="heard" lang="ca">{t.heard(heard)}</p>
          <button type="button" className="secondary-button" onClick={start}>{t.reRecord}</button>
        </>
      ) : (
        <button type="button" className="play-button" onClick={start}>{t.speak}</button>
      )}
    </div>
  );
}
