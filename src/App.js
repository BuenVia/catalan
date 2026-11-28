import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import './App.css';
import t from './strings';
import lessons, { sections, sectionOf } from './lessons';
import { loadProgress, saveResult } from './utils/progress';
import { cardsIn, lessonCompletionTimes } from './utils/review';
import { createReviewStore } from './utils/reviewStore';
import { createSupabaseClient } from './utils/supabase';
import LessonList, { ModuleList } from './components/LessonList';
import LessonScreen from './components/LessonScreen';
import CompletedLessons, { MIXED_ROUND_SIZE } from './components/CompletedLessons';
import PracticeSession from './components/PracticeSession';
import Results from './components/Results';

const exercisesById = new Map(lessons.flatMap((lesson) => lesson.exercises).map((e) => [e.id, e]));
const exerciseIdsBySection = new Map(
  sections.map((section) => [section.id, new Set(section.lessons.flatMap((l) => l.exercises.map((e) => e.id)))])
);

// The current time, kept fresh enough that cards fall due while a page is open.
function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60 * 1000);
    return () => clearInterval(timer);
  }, []);
  return now;
}

// Navigation is plain state, no router: screen is one of
//   { name: 'home' }                               (one button per module)
//   { name: 'section', sectionId }                 (a module's page, listing its lessons)
//   { name: 'lesson', lessonId }
//   { name: 'completed', sectionId }               (a module's completed lessons)
//   { name: 'practice', kind, mode, attempt, ... } (attempt changes to restart a round)
//   { name: 'results', kind, mode, correct, total, ... }
// where mode is 'translate', 'listen' or 'speak', and kind is what's practised:
//   'lesson' (with lessonId), 'review' (with sectionId and exerciseIds, fixed when the review
//   starts so answers don't reshuffle it) or 'mixed' (with sectionId: a random selection from the
//   module's completed lessons).
// `client` is for tests; by default it comes from the Supabase settings in .env.local.
function App({ client }) {
  const [screen, setScreen] = useState({ name: 'home' });
  const [progress, setProgress] = useState(loadProgress);
  const [store] = useState(() =>
    createReviewStore({ client: client === undefined ? createSupabaseClient() : client })
  );
  const { cards, rounds, status } = useSyncExternalStore(store.subscribe, store.getSnapshot);
  const now = useNow();
  const completedAt = useMemo(() => lessonCompletionTimes(rounds), [rounds]);

  // Each return to the app picks up anything changed in Supabase and retries waiting uploads.
  useEffect(() => {
    store.sync();
    const onVisible = () => {
      if (document.visibilityState === 'visible') store.sync();
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, [store]);

  const lesson = lessons.find((l) => l.id === screen.lessonId);
  const section = sections.find((s) => s.id === (screen.sectionId ?? (lesson && sectionOf(lesson.id).id)));
  const completedLessons = section ? section.lessons.filter((l) => completedAt.has(l.id)) : [];

  const show = (next) => {
    setScreen(next);
    window.scrollTo(0, 0);
  };
  const goHome = () => show({ name: 'home' });
  const openSection = (sectionId) => show({ name: 'section', sectionId });
  const openLesson = (lessonId) => show({ name: 'lesson', lessonId });
  const openCompleted = (sectionId) => show({ name: 'completed', sectionId });
  const practise = (fields) => show({ name: 'practice', ...fields, attempt: Date.now() });

  // What a practice screen practises, how its results are titled, and where it goes back to.
  function round(s) {
    if (s.kind === 'lesson') {
      return {
        exercises: lesson.exercises,
        title: lesson.title,
        backLabel: t.backToLesson,
        back: () => openLesson(lesson.id),
        retry: true,
      };
    }
    if (s.kind === 'review') {
      return {
        exercises: s.exerciseIds.map((id) => exercisesById.get(id)).filter(Boolean),
        title: t.review,
        backLabel: t.finish,
        back: () => openSection(s.sectionId),
        retry: false,
      };
    }
    return {
      exercises: completedLessons.flatMap((l) => l.exercises),
      roundSize: MIXED_ROUND_SIZE,
      title: t.completedLessons,
      backLabel: t.backToSentences,
      back: () => openCompleted(s.sectionId),
      retry: true,
    };
  }

  function finishRound({ correct, total }) {
    if (screen.kind === 'lesson') setProgress(saveResult(lesson.id, screen.mode, correct, total));
    const { attempt, ...rest } = screen;
    setScreen({ ...rest, name: 'results', correct, total });
  }

  // A results screen's round, to start it again.
  const roundFields = ({ name, correct, total, ...fields }) => fields;

  const current = screen.name === 'practice' || screen.name === 'results' ? round(screen) : null;

  return (
    <div className="app">
      {screen.name !== 'practice' && (
        <header className="app-header">
          <button type="button" className="app-title" onClick={goHome}>{t.appTitle}</button>
          <p className="app-subtitle">{t.appSubtitle}</p>
        </header>
      )}

      {screen.name === 'home' && <ModuleList sections={sections} progress={progress} onOpen={openSection} />}

      {screen.name === 'section' && (
        <LessonList
          section={section}
          progress={progress}
          completedAt={completedAt}
          reviewCards={cardsIn(cards, exerciseIdsBySection.get(section.id))}
          now={now}
          syncStatus={status}
          onReview={(mode, exerciseIds) => practise({ kind: 'review', sectionId: section.id, mode, exerciseIds })}
          onOpenCompleted={() => openCompleted(section.id)}
          onSelect={openLesson}
          onBack={goHome}
        />
      )}

      {screen.name === 'completed' && (
        <CompletedLessons
          section={section}
          lessons={completedLessons}
          onPractise={(mode) => practise({ kind: 'mixed', sectionId: section.id, mode })}
          onBack={() => openSection(section.id)}
        />
      )}

      {screen.name === 'lesson' && (
        <LessonScreen
          lesson={lesson}
          progress={progress[lesson.id]}
          onPractise={(mode) => practise({ kind: 'lesson', lessonId: lesson.id, mode })}
          onBack={() => openSection(section.id)}
        />
      )}

      {screen.name === 'practice' && (
        <PracticeSession
          key={screen.attempt}
          exercises={current.exercises}
          roundSize={current.roundSize}
          mode={screen.mode}
          onAnswer={(exercise, passed) => store.recordAnswer(exercise.id, screen.mode, passed)}
          onRoundComplete={() => {
            if (screen.kind === 'lesson') store.recordRoundFinished(lesson.id, screen.mode);
          }}
          onFinish={finishRound}
          onExit={current.back}
        />
      )}

      {screen.name === 'results' && (
        <Results
          title={current.title}
          mode={screen.mode}
          correct={screen.correct}
          total={screen.total}
          onRetry={current.retry ? () => practise(roundFields(screen)) : null}
          backLabel={current.backLabel}
          onBack={current.back}
        />
      )}
    </div>
  );
}

export default App;
