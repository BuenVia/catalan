import t from '../../strings';

export default function SelectExercise({ exercise, value, onChange, disabled }) {
  return (
    <>
      <h2 className="instruction">{t.instructions.select}</h2>
      <p className="prompt">{exercise.prompt}</p>
      {exercise.hint && <p className="hint">{exercise.hint}</p>}
      <div className="options">
        {exercise.options.map((option) => (
          <button
            key={option}
            type="button"
            lang="ca"
            className={`option ${value === option ? 'is-selected' : ''}`}
            aria-pressed={value === option}
            disabled={disabled}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}
