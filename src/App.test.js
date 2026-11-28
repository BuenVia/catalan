import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import lessons from './lessons';

beforeEach(() => {
  localStorage.clear();
  window.scrollTo = () => {}; // not implemented in jsdom
});

// An in-memory stand-in for Supabase, so these tests never reach the real database. Without one,
// the app keeps progress in the browser only.
function fakeClient({ cards = [], rounds = [] } = {}) {
  const client = {
    uploadedCards: [],
    uploadedRounds: [],
    fetchCards: async () => cards,
    fetchRounds: async () => rounds,
    upsertCards: async (list) => client.uploadedCards.push(...list),
    insertRounds: async (list) => client.uploadedRounds.push(...list),
  };
  return client;
}

// Waits for the first sync, so its updates don't land after the test has moved on.
async function renderApp(client = null) {
  render(<App client={client} />);
  await act(async () => {});
}

// Answers every sentence of a translating round correctly, then opens the results, waiting for
// each answer's upload.
async function answerTranslateRound(count) {
  const byEnglish = Object.fromEntries(lessons.flatMap((l) => l.exercises).map((e) => [e.english, e.answer]));
  for (let i = 0; i < count; i++) {
    const english = screen.getByText((_, el) => el.classList.contains('prompt')).textContent;
    fireEvent.change(screen.getByPlaceholderText('Your answer in Catalan'), { target: { value: byEnglish[english] } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    await act(async () => {});
    expect(screen.getByText('✓ Correct')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: i === count - 1 ? 'See results' : 'Next sentence' }));
  }
}

it('shows a lesson explanation, practice buttons and sentence list, and runs a round', async () => {
  await renderApp();
  fireEvent.click(screen.getByRole('button', { name: /Grammar/ }));
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

it('asks the sentences in a shuffled order, each exactly once', async () => {
  // With Math.random() always 0, the shuffle gives a fixed order that differs from the lesson's.
  const random = jest.spyOn(Math, 'random').mockReturnValue(0);
  await renderApp();
  fireEvent.click(screen.getByRole('button', { name: /Grammar/ }));
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

it('shows one button per module on the home screen, and no lessons', async () => {
  await renderApp();
  expect(screen.getAllByRole('button', { name: /^\d+ lessons/ })).toHaveLength(3);
  expect(screen.getByRole('button', { name: /^16 lessons Grammar/ })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /^9 lessons CPNL/ })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /^20 lessons Verbs/ })).toBeInTheDocument();
  expect(screen.queryByText('Greetings and introductions')).not.toBeInTheDocument();
  expect(screen.queryByText('Qui soc? Who am I?')).not.toBeInTheDocument();
  expect(screen.queryByText('Ser: to be')).not.toBeInTheDocument();
});

it('opens a lesson from the CPNL module', async () => {
  await renderApp();
  fireEvent.click(screen.getByRole('button', { name: /CPNL/ }));
  expect(screen.getByRole('heading', { name: 'CPNL' })).toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /^Lesson \d+/ })).toHaveLength(9);

  fireEvent.click(screen.getByText('Qui soc? Who am I?'));
  expect(screen.getByRole('heading', { name: 'Task: greet and introduce yourself' })).toBeInTheDocument();
  expect(screen.getByText('Soc de Manchester.')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Read English, write Catalan' })).toBeInTheDocument();
});

it('opens the Verbs module, returns there from a verb lesson, then goes home', async () => {
  await renderApp();
  fireEvent.click(screen.getByRole('button', { name: /Verbs/ }));
  expect(screen.getByRole('heading', { name: 'Verbs' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Grammar' })).not.toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: /^Lesson \d+/ })).toHaveLength(20);

  fireEvent.click(screen.getByText('Ser: to be'));
  expect(screen.getByRole('heading', { name: 'Present tense' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: '← Back' }));
  expect(screen.getByRole('heading', { name: 'Verbs' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: '← Back' }));
  expect(screen.getAllByRole('button', { name: /^\d+ lessons/ })).toHaveLength(3);
});

it('shows the reviews due in a module, and reviewing them updates their cards', async () => {
  const card = (exerciseId, mode, dueAt) => ({ exerciseId, mode, repetitions: 1, intervalDays: 1, ease: 2.5, dueAt });
  const client = fakeClient({
    cards: [
      card('ca-a1-001', 'translate', 0),
      card('ca-a1-002', 'translate', 0),
      card('ca-a1-003', 'translate', 0),
      card('ca-a1-004', 'listen', 0),
      card('ca-a1-005', 'translate', Date.now() + 86400000), // not due yet
      card('ca-a1-006', 'speak', 0), // speaking isn't reviewed
      card('es-b2-001', 'translate', 0), // BarceLang's Spanish, not in this app
      card('ca-verb-001', 'listen', 0),
    ],
  });
  await renderApp(client);
  fireEvent.click(screen.getByRole('button', { name: /Grammar/ }));

  expect(await screen.findByText('4 reviews due')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Hear Catalan, transcribe it (1)' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Read English, write Catalan (3)' }));
  await answerTranslateRound(3);

  await act(async () => {}); // let the uploads finish
  expect(screen.getByText('3 / 3')).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Practise again' })).not.toBeInTheDocument();
  expect(client.uploadedCards.map((c) => c.exerciseId).sort()).toEqual(['ca-a1-001', 'ca-a1-002', 'ca-a1-003']);
  expect(client.uploadedCards.every((c) => c.repetitions === 2 && c.intervalDays === 3)).toBe(true);

  fireEvent.click(screen.getByRole('button', { name: 'Finish' }));
  expect(screen.getByText('1 review due')).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /Read English, write Catalan \(/ })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: '← Back' }));
  fireEvent.click(screen.getByRole('button', { name: /Verbs/ }));
  expect(screen.getByRole('button', { name: 'Hear Catalan, transcribe it (1)' })).toBeInTheDocument();
});

it('lists completed lessons from the database and practises 15 of their sentences', async () => {
  const client = fakeClient({
    rounds: [
      { lessonId: 'ca-a1-lesson-01', mode: 'translate', completedAt: Date.UTC(2026, 10, 6, 12) },
      { lessonId: 'ca-a1-lesson-01', mode: 'listen', completedAt: Date.UTC(2026, 10, 7, 12) },
      { lessonId: 'ca-a1-lesson-02', mode: 'translate', completedAt: Date.UTC(2026, 10, 8, 12) },
    ],
  });
  await renderApp(client);
  fireEvent.click(screen.getByRole('button', { name: /Grammar/ }));

  expect(await screen.findByText('Mixed practice from 1 lesson')).toBeInTheDocument();
  expect(screen.getAllByText(/^Completed (?!lessons)/)).toHaveLength(1);

  fireEvent.click(screen.getByRole('button', { name: /Completed lessons/ }));
  expect(screen.getByRole('heading', { name: /Greetings and introductions/ })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: /Ser and estar/i })).not.toBeInTheDocument();
  expect(screen.getByText('Sóc de Londres.')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Read English, write Catalan' }));
  expect(screen.getByText('Sentence 1 of 15')).toBeInTheDocument();
  await answerTranslateRound(15);
  expect(screen.getByText('15 / 15')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Back to the sentences' }));
  expect(screen.getByRole('heading', { name: 'Completed lessons' })).toBeInTheDocument();
});

it('saves a lesson’s first finished round in each mode to the database', async () => {
  const client = fakeClient();
  await renderApp(client);
  fireEvent.click(screen.getByRole('button', { name: /CPNL/ }));
  expect(await screen.findByText('None yet')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Qui soc? Who am I?'));
  fireEvent.click(screen.getByRole('button', { name: 'Read English, write Catalan' }));
  await answerTranslateRound(15);
  await act(async () => {});

  expect(client.uploadedRounds).toEqual([expect.objectContaining({ lessonId: 'ca-ara-lesson-01', mode: 'translate' })]);
  expect(client.uploadedCards).toHaveLength(15);
});
