// All interface text (in Spanish, the learner's source language) in one place.

const strings = {
  appTitle: 'Català A1',
  appSubtitle: 'Practica catalán desde el castellano',
  lessonsHeading: 'Lecciones',
  lessonNumber: (n) => `Lección ${n}`,
  best: (correct, total) => `Mejor resultado: ${correct}/${total}`,
  notesHeading: 'Vocabulario y gramática',
  start: 'Empezar ejercicios',
  back: '← Volver',
  exit: 'Salir de la lección',
  listenTo: (text) => `Escuchar «${text}»`,

  instructions: {
    translate: 'Traduce al catalán',
    select: 'Elige la respuesta correcta',
    listen: 'Escucha y escribe lo que oyes',
  },
  translatePlaceholder: 'Escribe en catalán',
  listenPlaceholder: 'Escribe lo que oyes',
  specialCharacters: 'Caracteres catalanes',

  play: '🔊 Escuchar',
  playSlow: '🐢 Más lento',
  cantListen: 'No puedo escuchar ahora',
  noVoice:
    'Tu navegador no tiene una voz catalana, así que se usa una voz en castellano y la pronunciación no es exacta.',

  check: 'Comprobar',
  continue: 'Continuar',
  correct: '¡Correcto!',
  typo: 'Ojo con los acentos:',
  wrong: 'Respuesta correcta:',

  resultsTitle: '¡Lección completada!',
  score: (correct, total) => `${correct} de ${total} correctas a la primera`,
  retry: 'Repetir lección',
  toLessons: 'Volver a las lecciones',
};

export default strings;
