// Speech recognition through the browser's Web Speech API. Chrome, Edge and Safari have it
// (Chrome sends the audio to Google's servers); Firefox doesn't, so speaking is hidden there.

const Recognition =
  typeof window !== 'undefined' ? window.SpeechRecognition ?? window.webkitSpeechRecognition : undefined;

export const canRecognizeSpeech = Boolean(Recognition);

const MAXIMUM_GUESSES = 5;

// Listens for one attempt in Catalan. Calls onPartial(text) with the words recognised so far,
// then exactly one of onHeard(guesses) (best first) or onProblem(errorCode). Returns the
// recognition object, whose stop() ends listening early but still delivers what was heard.
export function listen({ onPartial, onHeard, onProblem }) {
  const recognition = new Recognition();
  recognition.lang = 'ca-ES';
  recognition.interimResults = true;
  recognition.maxAlternatives = MAXIMUM_GUESSES;
  recognition.continuous = false;

  let settled = false;
  const settle = (callback, value) => {
    if (settled) return;
    settled = true;
    callback(value);
  };

  recognition.onresult = (event) => {
    const results = Array.from(event.results);
    const best = results.map((result) => result[0].transcript.trim()).join(' ');
    onPartial(best);
    if (!results.every((result) => result.isFinal)) return;
    // Alternatives only differ in the last segment, if the browser split the attempt into several.
    const prefix = results.slice(0, -1).map((result) => result[0].transcript.trim()).join(' ');
    const guesses = Array.from(results[results.length - 1])
      .map((alternative) => `${prefix} ${alternative.transcript}`.trim())
      .filter(Boolean);
    if (guesses.length) settle(onHeard, guesses);
  };
  recognition.onerror = (event) => {
    if (event.error !== 'aborted') settle(onProblem, event.error);
  };
  recognition.onend = () => settle(onProblem, 'no-speech');

  recognition.start();
  return recognition;
}
