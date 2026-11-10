import { checkAnswer, matchAnswer } from './answers';
import lessons from '../lessons';

describe('matchAnswer', () => {
  it('ignores case, punctuation and extra spaces', () => {
    expect(matchAnswer('  com ET dius ', ['Com et dius?']).status).toBe('correct');
  });

  it('treats typographic and straight apostrophes the same', () => {
    expect(matchAnswer('D’on ets?', ["D'on ets?"]).status).toBe('correct');
  });

  it('accepts any listed alternative', () => {
    expect(matchAnswer('Sóc de Girona', ['Soc de Girona.', 'Sóc de Girona.']).status).toBe('correct');
  });

  it('accepts missing accents as a typo and returns the correct spelling', () => {
    expect(matchAnswer('ella te un gos', ['Ella té un gos.'])).toEqual({ status: 'typo', expected: 'Ella té un gos.' });
  });

  it('rejects wrong and empty answers', () => {
    expect(matchAnswer('Em dic Marta', ['Com et dius?']).status).toBe('wrong');
    expect(matchAnswer('   ', ['Com et dius?']).status).toBe('wrong');
  });
});

describe('checkAnswer', () => {
  it('accepts the spoken text and extra answers for listen exercises', () => {
    const exercise = { type: 'listen', text: 'quinze', answers: ['15'] };
    expect(checkAnswer(exercise, 'Quinze').status).toBe('correct');
    expect(checkAnswer(exercise, '15').status).toBe('correct');
  });

  it('compares select exercises exactly', () => {
    const exercise = { type: 'select', options: ['soc', 'ets'], answer: 'soc' };
    expect(checkAnswer(exercise, 'soc').status).toBe('correct');
    expect(checkAnswer(exercise, 'ets').status).toBe('wrong');
  });
});

describe('lesson data', () => {
  it.each(lessons.map((l) => [l.id, l]))('%s has valid exercises', (_id, lesson) => {
    const types = new Set(lesson.exercises.map((e) => e.type));
    expect(types).toEqual(new Set(['translate', 'select', 'listen']));
    for (const exercise of lesson.exercises) {
      if (exercise.type === 'translate') expect(exercise.answers.length).toBeGreaterThan(0);
      if (exercise.type === 'select') expect(exercise.options).toContain(exercise.answer);
      if (exercise.type === 'listen') expect(exercise.text).toBeTruthy();
    }
  });

  it('has unique lesson ids', () => {
    const ids = lessons.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
