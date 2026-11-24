import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import lessons from './lessons';

beforeEach(() => {
  localStorage.clear();
  window.scrollTo = () => {}; // not implemented in jsdom
});

it('shows a lesson explanation, practice buttons and sentence list, and runs a round', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Greetings and introductions'));

  expect(screen.getByRole('heading', { name: 'Introducing yourself' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Read English, write Catalan' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Hear Catalan, transcribe it' })).toBeInTheDocument();
  // jsdom has no speech recognition, so speaking is replaced by a note.
  expect(screen.queryByRole('button', { name: 'Read English, say it in Catalan' })).not.toBeInTheDocument();
  expect(screen.getByText('Sóc de Londres.')).toBeInTheDocument();
  expect(screen.getByText("I'm from London.")).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Read English, write Catalan' }));
  const byEnglish = Object.fromEntries(lessons[0].exercises.map((e) => [e.english, e.answer]));
  for (let i = 0; i < 15; i++) {
    const english = screen.getByText((_, el) => el.classList.contains('prompt')).textContent;
    fireEvent.change(screen.getByPlaceholderText('Your answer in Catalan'), {
      target: { value: i === 0 ? 'wrong' : byEnglish[english] },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByText(i === 0 ? '✗ Incorrect' : '✓ Correct')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: i === 14 ? 'See results' : 'Next sentence' }));
  }

  expect(screen.getByText('14 / 15')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Back to lesson' }));
  expect(screen.getByRole('button', { name: /Read English, write Catalan · ✓ 14\/15/ })).toBeInTheDocument();
});

it('asks the sentences in a shuffled order, each exactly once', () => {
  // With Math.random() always 0, the shuffle gives a fixed order that differs from the lesson's.
  const random = jest.spyOn(Math, 'random').mockReturnValue(0);
  render(<App />);
  fireEvent.click(screen.getByText('Greetings and introductions'));
  fireEvent.click(screen.getByRole('button', { name: 'Read English, write Catalan' }));

  const asked = [];
  for (let i = 0; i < 15; i++) {
    asked.push(screen.getByText((_, el) => el.classList.contains('prompt')).textContent);
    fireEvent.change(screen.getByPlaceholderText('Your answer in Catalan'), { target: { value: 'x' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    fireEvent.click(screen.getByRole('button', { name: i === 14 ? 'See results' : 'Next sentence' }));
  }
  random.mockRestore();

  const inLessonOrder = lessons[0].exercises.map((e) => e.english);
  expect(asked).not.toEqual(inLessonOrder);
  expect([...asked].sort()).toEqual([...inLessonOrder].sort());
});
