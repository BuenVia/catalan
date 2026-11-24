// Answer checking, ported from BarceLang's Model.kt.
//
// An exercise's `pattern` uses `{a|b}` to mark interchangeable wording. The first option of each
// group forms the model answer, which is what gets displayed and spoken, so `{|Jo }sóc de Londres.`
// shows "Sóc de Londres." but also accepts "Jo sóc de Londres.". `alsoAccepted` covers rewordings
// that groups can't express, such as moving a word to the other end of the sentence.

export const MODES = ['translate', 'listen', 'speak'];

// The verdicts. Only CORRECT scores a point: an answer that is right apart from its accents is
// still marked wrong, but the learner is told that only the accents differ.
export const CORRECT = 'correct';
export const ACCENTS_ONLY = 'accents';
export const WRONG = 'wrong';

const OPTION_GROUP = /\{([^{}]*)\}/;
// ASCII punctuation (Java's \p{Punct}) plus the typographic marks people type or paste.
const PUNCTUATION = /[\x21-\x2f\x3a-\x40\x5b-\x60\x7b-\x7e¿¡«»…—–‘’“”]/g;
const WHITESPACE = /\s+/g;
const COMBINING_MARKS = /\p{M}+/gu;
// Few keyboards have the Catalan "·", so "col.legi" is the usual way to type "col·legi".
const TYPED_GEMINATE_L = /(?<=l)[.-](?=l)/g;

export function expand(pattern) {
  const group = OPTION_GROUP.exec(pattern);
  if (!group) return [pattern];
  const before = pattern.slice(0, group.index);
  const after = pattern.slice(group.index + group[0].length);
  return group[1].split('|').flatMap((option) => expand(before + option + after));
}

function capitalizeFirstLetter(text) {
  const first = text.search(/\p{L}/u);
  return first < 0 ? text : text.slice(0, first) + text[first].toUpperCase() + text.slice(first + 1);
}

// Adds the model `answer` and every accepted `wordings` to an exercise from the lesson data.
export function prepareExercise(exercise) {
  const expanded = expand(exercise.pattern);
  return {
    ...exercise,
    answer: capitalizeFirstLetter(expanded[0]),
    wordings: [...expanded, ...(exercise.alsoAccepted ?? []).flatMap(expand)],
  };
}

// Ignores case, punctuation and spacing. Accents stay significant: "te" is not "té".
export function normalize(text) {
  return text
    .normalize('NFC')
    .toLowerCase()
    .replace(TYPED_GEMINATE_L, '·')
    .replace(PUNCTUATION, ' ')
    .replace(WHITESPACE, ' ')
    .trim();
}

export function stripAccents(text) {
  return text.normalize('NFD').replace(COMBINING_MARKS, '').normalize('NFC');
}

// "a las 8:00" is how recognisers often write "a las ocho".
const ON_THE_HOUR = /(\d)[:.]00\b/g;

// Spanish and Catalan together, without accents. None of these means something else in the other.
const NUMBER_WORDS = {
  zero: 0, cero: 0,
  dos: 2, dues: 2, tres: 3, quatre: 4, cuatro: 4, cinc: 5, cinco: 5,
  sis: 6, seis: 6, set: 7, siete: 7, vuit: 8, ocho: 8, nou: 9,
  nueve: 9, deu: 10, diez: 10, onze: 11, once: 11, dotze: 12, doce: 12,
  tretze: 13, trece: 13, catorze: 14, catorce: 14, quinze: 15, quince: 15,
  setze: 16, dieciseis: 16, disset: 17, diecisiete: 17, divuit: 18,
  dieciocho: 18, dinou: 19, diecinueve: 19,
  vint: 20, veinte: 20, veintiun: 21, veintiuno: 21, veintiuna: 21,
  veintidos: 22, veintitres: 23, veinticuatro: 24, veinticinco: 25,
  veintiseis: 26, veintisiete: 27, veintiocho: 28, veintinueve: 29,
  trenta: 30, treinta: 30, quaranta: 40, cuarenta: 40, cinquanta: 50,
  cincuenta: 50, seixanta: 60, sesenta: 60, setanta: 70, setenta: 70,
  vuitanta: 80, ochenta: 80, noranta: 90, noventa: 90, cent: 100, cien: 100,
};

// "One" is also "a", so it only counts as a number after a ten, as in "trenta-un".
const ONES = new Set(['u', 'un', 'una', 'uno']);
const TENS_JOINERS = new Set(['i', 'y']);

const asNumber = (word) => (word !== undefined && /^\d+$/.test(word) ? Number(word) : null);

function numbersAsDigits(text) {
  const words = text.split(' ').map((word) => (word in NUMBER_WORDS ? String(NUMBER_WORDS[word]) : word));
  const result = [];
  let i = 0;
  while (i < words.length) {
    const tens = asNumber(words[i]);
    if (tens !== null && tens >= 20 && tens <= 90 && tens % 10 === 0) {
      let next = i + 1;
      if (TENS_JOINERS.has(words[next])) next++;
      const unit = ONES.has(words[next]) ? 1 : asNumber(words[next]);
      if (unit !== null && unit >= 1 && unit <= 9) {
        result.push(String(tens + unit));
        i = next + 1;
        continue;
      }
    }
    result.push(words[i]);
    i++;
  }
  return result.join(' ');
}

// Only what can be heard, as the recogniser writes it. Accents and the "·" go, because "si" and
// "sí" sound alike, and numbers become digits on both sides, because "les vuit" may come back as
// "les 8". That means a spoken "dos cases" passes for "dues cases": the recogniser writes "2" for either.
function spoken(text) {
  return numbersAsDigits(stripAccents(normalize(text.replace(ON_THE_HOUR, '$1'))).replace(/·/g, ''));
}

// `heard` is the recogniser's guesses at one attempt, best first. Any accepted wording passes, as
// when translating, and one matching guess is enough, since the recogniser often ranks the right
// sentence below a near miss. Speech has no spelling, so there's no ACCENTS_ONLY.
export function checkSpoken(exercise, heard) {
  const accepted = new Set(exercise.wordings.map(spoken));
  return heard.some((guess) => accepted.has(spoken(guess))) ? CORRECT : WRONG;
}

// Translating accepts any listed wording; transcribing must match what was actually said.
export function checkAnswer(exercise, typed, mode) {
  if (mode === 'speak') return checkSpoken(exercise, [typed]);
  const accepted = mode === 'translate' ? exercise.wordings.map(normalize) : [normalize(exercise.answer)];
  const given = normalize(typed);
  if (accepted.includes(given)) return CORRECT;
  if (accepted.some((a) => stripAccents(a) === stripAccents(given))) return ACCENTS_ONLY;
  return WRONG;
}
