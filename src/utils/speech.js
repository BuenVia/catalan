// Audio playback. If an item has an `audioSrc` (a file under public/, e.g. "audio/bon-dia.mp3")
// that recording is played; otherwise the text is read out with the browser's built-in
// Web Speech API using a Catalan voice when one is installed.

const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;

function getVoices() {
  return new Promise((resolve) => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length) return resolve(voices);
    // Some browsers load voices asynchronously.
    const done = () => resolve(window.speechSynthesis.getVoices());
    window.speechSynthesis.addEventListener('voiceschanged', done, { once: true });
    setTimeout(done, 1000);
  });
}

const langIs = (voice, pattern) => pattern.test(voice.lang.replace('_', '-'));

export async function findCatalanVoice() {
  if (!supported) return null;
  const voices = await getVoices();
  return voices.find((v) => langIs(v, /^ca(-|$)/i)) ?? null;
}

// Best available voice: Catalan, otherwise Spanish from Spain (much closer to Catalan than
// the browser default, which is often English), otherwise any Spanish voice.
async function findVoice() {
  const catalan = await findCatalanVoice();
  if (catalan) return catalan;
  const voices = await getVoices();
  return (
    voices.find((v) => langIs(v, /^es-ES$/i)) ??
    voices.find((v) => langIs(v, /^es(-|$)/i)) ??
    null
  );
}

// Speaks `text` and returns a function that stops playback.
export function speak(text, { slow = false } = {}) {
  if (!supported) return () => {};
  let cancelled = false;
  findVoice().then((voice) => {
    if (cancelled) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voice?.lang ?? 'ca-ES';
    if (voice) utterance.voice = voice;
    utterance.rate = slow ? 0.6 : 0.9;
    synth.speak(utterance);
  });
  return () => {
    cancelled = true;
    window.speechSynthesis.cancel();
  };
}

// Plays { text, audioSrc? } and returns a function that stops playback.
export function playCatalan({ text, audioSrc }, options = {}) {
  if (audioSrc) {
    const audio = new Audio(`${process.env.PUBLIC_URL}/${audioSrc}`);
    audio.playbackRate = options.slow ? 0.7 : 1;
    audio.play().catch(() => {});
    return () => audio.pause();
  }
  return speak(text, options);
}
