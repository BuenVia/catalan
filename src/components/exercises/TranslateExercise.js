import t from '../../strings';
import TextAnswer from './TextAnswer';

export default function TranslateExercise({ exercise, value, onChange, disabled }) {
  return (
    <>
      <h2 className="instruction">{t.instructions.translate}</h2>
      <p className="prompt" lang="es">{exercise.prompt}</p>
      <TextAnswer value={value} onChange={onChange} disabled={disabled} placeholder={t.translatePlaceholder} />
    </>
  );
}
