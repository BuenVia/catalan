import { useState } from 'react';
import './App.css';
import t from './strings';
import lessons from './lessons';
import { loadProgress, saveResult } from './utils/progress';
import LessonList from './components/LessonList';
import LessonScreen from './components/LessonScreen';
import PracticeSession from './components/PracticeSession';
import Results from './components/Results';

// Navigation is plain state, no router: screen is one of
//   { name: 'home' }
//   { name: 'lesson', lessonId }
//   { name: 'practice', lessonId, mode, attempt }   (attempt changes to restart a round)
//   { name: 'results', lessonId, mode, correct, total }
// where mode is 'translate', 'listen' or 'speak'.
function App() {
  const [screen, setScreen] = useState({ name: 'home' });
  const [progress, setProgress] = useState(loadProgress);
  const lesson = lessons.find((l) => l.id === screen.lessonId);

  const goHome = () => setScreen({ name: 'home' });
  const openLesson = (lessonId) => {
    setScreen({ name: 'lesson', lessonId });
    window.scrollTo(0, 0);
  };
  const practise = (mode) => setScreen({ name: 'practice', lessonId: lesson.id, mode, attempt: Date.now() });

  function finishRound({ correct, total }) {
    setProgress(saveResult(lesson.id, screen.mode, correct, total));
    setScreen({ name: 'results', lessonId: lesson.id, mode: screen.mode, correct, total });
  }

  return (
    <div className="app">
      {screen.name !== 'practice' && (
        <header className="app-header">
          <button type="button" className="app-title" onClick={goHome}>{t.appTitle}</button>
          <p className="app-subtitle">{t.appSubtitle}</p>
        </header>
      )}

      {screen.name === 'home' && <LessonList lessons={lessons} progress={progress} onSelect={openLesson} />}

      {screen.name === 'lesson' && (
        <LessonScreen lesson={lesson} progress={progress[lesson.id]} onPractise={practise} onBack={goHome} />
      )}

      {screen.name === 'practice' && (
        <PracticeSession
          key={screen.attempt}
          lesson={lesson}
          mode={screen.mode}
          onFinish={finishRound}
          onExit={() => openLesson(lesson.id)}
        />
      )}

      {screen.name === 'results' && (
        <Results
          lesson={lesson}
          mode={screen.mode}
          correct={screen.correct}
          total={screen.total}
          onRetry={() => practise(screen.mode)}
          onBack={() => openLesson(lesson.id)}
        />
      )}
    </div>
  );
}

export default App;
