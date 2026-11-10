import { useRef } from 'react';
import t from '../../strings';

// Catalan letters that are awkward to type on a Spanish keyboard.
const SPECIAL_CHARACTERS = ['à', 'è', 'é', 'í', 'ï', 'ò', 'ó', 'ú', 'ü', 'ç', '·'];

export default function TextAnswer({ value, onChange, disabled, placeholder }) {
  const inputRef = useRef(null);

  function insert(character) {
    const input = inputRef.current;
    const start = input.selectionStart ?? value.length;
    const end = input.selectionEnd ?? value.length;
    onChange(value.slice(0, start) + character + value.slice(end));
    requestAnimationFrame(() => {
      input.focus();
      input.setSelectionRange(start + character.length, start + character.length);
    });
  }

  return (
    <div className="text-answer">
      <input
        ref={inputRef}
        type="text"
        lang="ca"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        autoFocus
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
      />
      <div className="special-characters" aria-label={t.specialCharacters}>
        {SPECIAL_CHARACTERS.map((character) => (
          <button
            key={character}
            type="button"
            disabled={disabled}
            onMouseDown={(e) => e.preventDefault()} // keep the cursor in the input
            onClick={() => insert(character)}
          >
            {character}
          </button>
        ))}
      </div>
    </div>
  );
}
