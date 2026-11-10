import { useState } from 'react';
import './App.css';
import t from './strings';
import lessons from './lessons';
import { loadProgress, saveResult } from './utils/progress';
import LessonList from './components/LessonList';
import LessonIntro from './components/LessonIntro';
import ExerciseSession from './components/ExerciseSession';
import Results from './components/Results';

// Navigation is plain state, no router: screen is one of
//   { name: 'home' }
//   { name: 'intro', lessonId }
//   { name: 'session', lessonId, attempt }   (attempt changes to restart a session)
//   { name: 'results', lessonId, correct, total }
function App() {
  const [screen, setScreen] = useState({ name: 'home' });
  const [progress, setProgress] = useState(loadProgress);
  const lesson = lessons.find((l) => l.id === screen.lessonId);

  const goHome = () => setScreen({ name: 'home' });
  const startSession = (lessonId) => setScreen({ name: 'session', lessonId, attempt: Date.now() });

  function finishSession({ correct, total }) {
    setProgress(saveResult(lesson.id, correct, total));
    setScreen({ name: 'results', lessonId: lesson.id, correct, total });
  }

  return (
    <div className="app">
      {screen.name !== 'session' && (
        <header className="app-header">
          <button type="button" className="app-title" onClick={goHome}>{t.appTitle}</button>
          <p className="app-subtitle">{t.appSubtitle}</p>
        </header>
      )}

      {screen.name === 'home' && (
        <LessonList
          lessons={lessons}
          progress={progress}
          onSelect={(lessonId) => setScreen({ name: 'intro', lessonId })}
        />
      )}

      {screen.name === 'intro' && (
        <LessonIntro lesson={lesson} onStart={() => startSession(lesson.id)} onBack={goHome} />
      )}

      {screen.name === 'session' && (
        <ExerciseSession
          key={screen.attempt}
          lesson={lesson}
          onFinish={finishSession}
          onExit={() => setScreen({ name: 'intro', lessonId: lesson.id })}
        />
      )}

      {screen.name === 'results' && (
        <Results
          lesson={lesson}
          correct={screen.correct}
          total={screen.total}
          onRetry={() => startSession(lesson.id)}
          onHome={goHome}
        />
      )}
    </div>
  );
}

export default App;
