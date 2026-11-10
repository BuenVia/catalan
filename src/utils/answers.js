// Answer checking for typed exercises (translate / listen) and select exercises.
//
// Typed answers are compared after normalising case, punctuation, apostrophes and
// whitespace. An answer that only differs in accents is accepted as a "typo" so the
// learner still sees the correct spelling.

const PUNCTUATION = /[¿?¡!.,;:"«»()]/g;

export function normalize(text) {
  return text
    .normalize('NFC')
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/l[.•]l/g, 'l·l') // "col.legi" -> "col·legi"
    .replace(PUNCTUATION, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function stripAccents(text) {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// Returns { status: 'correct' | 'typo' | 'wrong', expected }.
export function matchAnswer(input, answers) {
  const given = normalize(input);
  if (given && answers.some((a) => normalize(a) === given)) {
    return { status: 'correct', expected: answers[0] };
  }
  const nearMatch = given && answers.find((a) => stripAccents(normalize(a)) === stripAccents(given));
  if (nearMatch) {
    return { status: 'typo', expected: nearMatch };
  }
  return { status: 'wrong', expected: answers[0] };
}

export function acceptedAnswers(exercise) {
  if (exercise.type === 'listen') return [exercise.text, ...(exercise.answers ?? [])];
  return exercise.answers;
}

export function checkAnswer(exercise, input) {
  if (exercise.type === 'select') {
    return { status: input === exercise.answer ? 'correct' : 'wrong', expected: exercise.answer };
  }
  return matchAnswer(input, acceptedAnswers(exercise));
}
