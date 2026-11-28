// All interface text in one place. The wording follows BarceLang, whose lessons this app uses.

const strings = {
  appTitle: 'Català A1',
  appSubtitle: 'First steps in Catalan: grammar basics, everyday situations and the most common verbs',
  lessonNumber: (n) => `Lesson ${n}`,
  lessonCount: (n) => `${n} lessons`,
  practised: (n, total) => `${n} of ${total} practised`,
  back: '← Back',
  exit: 'Leave practice',
  listenTo: (text) => `Listen to “${text}”`,

  modes: {
    translate: 'Read English, write Catalan',
    listen: 'Hear Catalan, transcribe it',
    speak: 'Read English, say it in Catalan',
  },
  modeShort: { translate: 'Write', listen: 'Hear', speak: 'Say' },
  best: (correct, total) => `${correct}/${total}`,
  practise: (count) => `Practise ${count} sentences`,
  noRecognition: 'Speaking practice needs a browser with speech recognition, such as Chrome, Edge or Safari.',
  sentencesHeading: 'Sentences',

  sentenceOf: (n, total) => `Sentence ${n} of ${total}`,
  instructions: {
    translate: 'Translate into Catalan',
    listen: 'Write what you hear',
    speak: 'Say it in Catalan',
  },
  answerPlaceholder: 'Your answer in Catalan',
  specialCharacters: 'Catalan characters',

  play: '▶ Play',
  playSlow: '▶ Slowly',
  noVoice:
    'Your browser has no Catalan voice, so a Spanish one is used and the pronunciation isn’t exact. ' +
    'On Linux, Firefox can use espeak-ng’s Catalan voice, and so can Chrome when started with --enable-speech-dispatcher.',

  speak: '🎤 Speak',
  reRecord: '🎤 Re-record',
  doneSpeaking: '■ Done speaking',
  listening: 'Listening…',
  heard: (text) => `Heard: “${text}”`,
  recognitionProblems: {
    'no-speech': 'Didn’t catch that. Tap the microphone and try again.',
    'audio-capture': 'No microphone was found. Connect one and try again.',
    'not-allowed': 'The app needs microphone access to hear you. Allow it in your browser and try again.',
    'service-not-allowed': 'The app needs microphone access to hear you. Allow it in your browser and try again.',
    'language-not-supported': 'Your browser’s speech recognition doesn’t support Catalan.',
    network: 'Couldn’t reach the speech recognition service. Check your connection and try again.',
    other: 'Speech recognition stopped unexpectedly. Try again.',
  },

  submit: 'Submit',
  nextSentence: 'Next sentence',
  seeResults: 'See results',
  correct: '✓ Correct',
  incorrect: '✗ Incorrect',
  accentsOnly: 'Check your accents: only those are different.',
  hearIt: '▶ Hear it',

  sentencesCorrect: 'sentences correct',
  retry: 'Practise again',
  backToLesson: 'Back to lesson',
  finish: 'Finish',
  backToSentences: 'Back to the sentences',

  review: 'Review',
  reviewsDue: (n) => (n === 1 ? '1 review due' : `${n} reviews due`),
  reviewMode: { translate: 'Read English, write Catalan', listen: 'Hear Catalan, transcribe it' },
  allCaughtUp: (days) =>
    `All caught up. Next review: ${days <= 0 ? 'later today' : days === 1 ? 'tomorrow' : `in ${days} days`}.`,
  noReviewsYet: 'Practise a lesson and its sentences will come back here for review.',
  syncOffline: 'Couldn’t reach the progress database. Your answers are saved here and will be uploaded later.',

  completedLessons: 'Completed lessons',
  completedSummary: (n) =>
    n === 0 ? 'None yet' : n === 1 ? 'Mixed practice from 1 lesson' : `Mixed practice from ${n} lessons`,
  completedOn: (date) => `Completed ${date}`,
  noCompletedLessons:
    'Finish a writing round and a listening round of a lesson and its sentences will appear here.',
  practiseRandom: (n) => `Practise ${n} random sentences`,
};

export default strings;
