import { useEffect, useState } from 'react';
import t from '../../strings';
import { findCatalanVoice, playCatalan } from '../../utils/speech';

// Plays the model answer once when it appears, with buttons to hear it again, normally or slowly.
export default function ListenPrompt({ exercise, autoPlay }) {
  const [hasCatalanVoice, setHasCatalanVoice] = useState(true);
  const audio = { text: exercise.answer, audioSrc: exercise.audioSrc };

  // Only on mount: the parent remounts this for each sentence.
  useEffect(() => {
    if (autoPlay) return playCatalan(audio);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!exercise.audioSrc) findCatalanVoice().then((voice) => setHasCatalanVoice(Boolean(voice)));
  }, [exercise]);

  return (
    <>
      <div className="listen-buttons">
        <button type="button" className="play-button" onClick={() => playCatalan(audio)}>{t.play}</button>
        <button type="button" className="play-button is-slow" onClick={() => playCatalan(audio, { slow: true })}>
          {t.playSlow}
        </button>
      </div>
      {!hasCatalanVoice && <p className="warning">{t.noVoice}</p>}
    </>
  );
}
