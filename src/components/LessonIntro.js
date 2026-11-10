import t from '../strings';
import { speak } from '../utils/speech';

export default function LessonIntro({ lesson, onStart, onBack }) {
  return (
    <main className="page">
      <button type="button" className="link-button" onClick={onBack}>{t.back}</button>
      <h2 className="intro-title">
        <span aria-hidden="true">{lesson.icon}</span> <span lang="ca">{lesson.title}</span>
      </h2>
      <p className="intro-subtitle">{lesson.subtitle}</p>

      <button type="button" className="primary-button" onClick={onStart}>{t.start}</button>

      <h3 className="section-heading">{t.notesHeading}</h3>
      {lesson.notes.map((section) => (
        <section key={section.title} className="note-card">
          <h4 lang="ca">{section.title}</h4>
          <table>
            <tbody>
              {section.rows.map(([catalan, spanish]) => (
                <tr key={catalan}>
                  <td className="note-ca" lang="ca">
                    <button
                      type="button"
                      className="speak-button"
                      onClick={() => speak(catalan)}
                      aria-label={t.listenTo(catalan)}
                    >
                      🔊
                    </button>
                    {catalan}
                  </td>
                  <td className="note-es">{spanish}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {section.tip && <p className="note-tip">💡 {section.tip}</p>}
        </section>
      ))}

      <button type="button" className="primary-button" onClick={onStart}>{t.start}</button>
    </main>
  );
}
