import { useEffect, useState } from 'react';
import t from '../../strings';
import { findCatalanVoice, playCatalan } from '../../utils/speech';
import TextAnswer from './TextAnswer';

export default function ListenExercise({ exercise, value, onChange, onSkip, disabled }) {
  const [hasCatalanVoice, setHasCatalanVoice] = useState(true);

  // Play once when the exercise appears; stop if it is left early.
  useEffect(() => playCatalan(exercise), [exercise]);

  useEffect(() => {
    if (!exercise.audioSrc) findCatalanVoice().then((voice) => setHasCatalanVoice(Boolean(voice)));
  }, [exercise]);

  return (
    <>
      <h2 className="instruction">{t.instructions.listen}</h2>
      <div className="listen-buttons">
        <button type="button" className="play-button" onClick={() => playCatalan(exercise)}>{t.play}</button>
        <button type="button" className="play-button is-slow" onClick={() => playCatalan(exercise, { slow: true })}>
          {t.playSlow}
        </button>
      </div>
      {!hasCatalanVoice && <p className="warning">{t.noVoice}</p>}
      <TextAnswer value={value} onChange={onChange} disabled={disabled} placeholder={t.listenPlaceholder} />
      {!disabled && (
        <button type="button" className="link-button" onClick={onSkip}>{t.cantListen}</button>
      )}
    </>
  );
}
