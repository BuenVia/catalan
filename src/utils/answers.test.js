import { ACCENTS_ONLY, CORRECT, MODES, WRONG, checkAnswer, checkSpoken, prepareExercise } from './answers';
import lessons from '../lessons';

// Ported from BarceLang's ExerciseTest.kt.
const make = (pattern, ...alsoAccepted) => prepareExercise({ id: 'test', english: '', pattern, alsoAccepted });

const exercise = make('{|jo }vull que {|tu }{vinguis|vinguessis}.', 'Que {|tu }vinguis, {|jo }vull.');

describe('model answer', () => {
  it('uses the first options and is capitalised', () => {
    expect(exercise.answer).toBe('Vull que vinguis.');
    expect(make('¿{hay|existe} alguien?').answer).toBe('¿Hay alguien?');
  });
});

describe('translating', () => {
  it.each(['Vull que vinguis.', 'Jo vull que tu vinguis', 'vull que vinguessis', 'Que vinguis, vull'])(
    'accepts every listed wording: %s',
    (answer) => expect(checkAnswer(exercise, answer, 'translate')).toBe(CORRECT)
  );

  it('ignores case, spacing and punctuation', () => {
    expect(checkAnswer(exercise, '  VULL   que, vinguis!! ', 'translate')).toBe(CORRECT);
    expect(checkAnswer(make("D'on ets?"), 'D’on ets', 'translate')).toBe(CORRECT);
  });

  it('matches decomposed Unicode with composed', () => {
    expect(checkAnswer(make('té'), 'té', 'translate')).toBe(CORRECT);
  });

  it('marks the wrong words as wrong', () => {
    expect(checkAnswer(exercise, 'Vull que véns.', 'translate')).toBe(WRONG);
  });

  it('flags an answer that is wrong only in its accents', () => {
    expect(checkAnswer(make('Ella té un gos.'), 'Ella te un gos', 'translate')).toBe(ACCENTS_ONLY);
    expect(checkAnswer(make('Vaig a la plaça.'), 'Vaig a la placa', 'translate')).toBe(ACCENTS_ONLY);
  });

  it('lets the geminate l be typed with a full stop or hyphen', () => {
    const intelligent = make('La Marta és intel·ligent.');
    for (const typed of ['La Marta és intel·ligent', 'la marta és intel.ligent', 'La Marta és intel-ligent']) {
      expect(checkAnswer(intelligent, typed, 'translate')).toBe(CORRECT);
    }
    expect(checkAnswer(intelligent, 'La Marta és inteligent', 'translate')).toBe(WRONG);
  });
});

describe('transcribing', () => {
  it('only accepts what was spoken', () => {
    expect(checkAnswer(exercise, 'vull que vinguis', 'listen')).toBe(CORRECT);
    expect(checkAnswer(exercise, 'jo vull que vinguis', 'listen')).toBe(WRONG);
    expect(checkAnswer(exercise, 'vull que vinguessis', 'listen')).toBe(WRONG);
  });
});

describe('speaking', () => {
  it('accepts any wording but not the wrong words', () => {
    expect(checkAnswer(exercise, 'Jo vull que tu vinguessis', 'speak')).toBe(CORRECT);
    expect(checkAnswer(exercise, 'Vull que véns', 'speak')).toBe(WRONG);
  });

  it('ignores what cannot be heard', () => {
    expect(checkAnswer(make('Sí, té set.'), 'si te set', 'speak')).toBe(CORRECT);
    expect(checkAnswer(make('Vaig a la plaça.'), 'vaig a la placa', 'speak')).toBe(CORRECT);
    expect(checkAnswer(make('És intel·ligent.'), 'és intelligent', 'speak')).toBe(CORRECT);
  });

  it('passes if any guess matches', () => {
    expect(checkSpoken(exercise, ['vull que véns', 'vull que vinguis'])).toBe(CORRECT);
    expect(checkSpoken(exercise, ['vull que véns', 'vull que ve'])).toBe(WRONG);
    expect(checkSpoken(exercise, [])).toBe(WRONG);
  });

  it.each([
    ['{|Jo }tinc trenta-un anys.', 'Tinc 31 anys'],
    ['{|Jo }tinc vint-i-dos anys.', 'tinc 22 anys'],
    ['Tengo treinta y un años.', 'Tengo 31 años'],
    ['Tengo veintidós años.', 'tengo 22 años'],
    ['Para las ocho habré terminado.', 'Para las 8:00 habré terminado'],
    ['Són dos quarts de quatre.', 'Són 2 quarts de 4'],
    ['{|Jo }tinc dues cases.', 'Tinc 2 cases'],
  ])('lets spoken numbers come back as digits: %s', (pattern, heard) => {
    expect(checkAnswer(make(pattern), heard, 'speak')).toBe(CORRECT);
  });

  it('still tells numbers apart, and keeps "un" as an article', () => {
    expect(checkAnswer(make('Tinc trenta-un anys.'), 'tinc 30 anys', 'speak')).toBe(WRONG);
    expect(checkAnswer(make('Vull un cafè.'), 'vull un cafe', 'speak')).toBe(CORRECT);
  });
});

describe('lesson data', () => {
  it.each(lessons.map((l) => [l.title, l]))('%s has 15 distinct sentences and an explanation', (_title, lesson) => {
    expect(lesson.exercises).toHaveLength(15);
    expect(new Set(lesson.exercises.map((e) => e.answer)).size).toBe(15);
    expect(lesson.explanation.trim()).not.toBe('');
    for (const e of lesson.exercises) expect(e.english.trim()).not.toBe('');
  });

  it('has every model answer well formed and passing in every mode', () => {
    for (const lesson of lessons) {
      for (const { answer, ...rest } of lesson.exercises) {
        expect(answer).not.toMatch(/[{}|]/);
        expect(answer).toBe(answer.trim());
        expect(answer).not.toContain('  ');
        for (const mode of MODES) expect([answer, mode, checkAnswer({ answer, ...rest }, answer, mode)]).toEqual([answer, mode, CORRECT]);
      }
    }
  });

  it('has unique lesson and sentence ids', () => {
    const lessonIds = lessons.map((l) => l.id);
    expect(new Set(lessonIds).size).toBe(lessonIds.length);
    const exerciseIds = lessons.flatMap((l) => l.exercises.map((e) => e.id));
    expect(new Set(exerciseIds).size).toBe(exerciseIds.length);
  });
});
