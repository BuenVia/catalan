const lesson = {
  id: 'casa',
  icon: '🏠',
  title: 'La casa i on vius',
  subtitle: 'La casa y la ubicación · viure · hi ha',
  notes: [
    {
      title: 'La casa',
      rows: [
        ['la casa', 'la casa'],
        ['el pis', 'el piso'],
        ['la cuina', 'la cocina'],
        ['el menjador', 'el comedor'],
        ["la sala d'estar", 'el salón'],
        ["l'habitació", 'la habitación'],
        ['el bany', 'el baño'],
        ['la terrassa', 'la terraza'],
        ['la taula', 'la mesa'],
        ['la cadira', 'la silla'],
        ['el sofà', 'el sofá'],
        ['el llit', 'la cama'],
        ['la finestra', 'la ventana'],
        ['la porta', 'la puerta'],
      ],
    },
    {
      title: 'On és?',
      rows: [
        ['al costat de', 'al lado de'],
        ['davant de', 'delante de'],
        ['darrere de', 'detrás de'],
        ['a sobre de', 'encima de'],
        ['a sota de', 'debajo de'],
        ['dins de', 'dentro de'],
        ['entre', 'entre'],
        ['a prop de', 'cerca de'],
        ['lluny de', 'lejos de'],
      ],
      tip: 'de + el = del: «al costat del sofà».',
    },
    {
      title: 'Viure',
      rows: [
        ['jo visc', 'yo vivo'],
        ['tu vius', 'tú vives'],
        ['ell / ella viu', 'él / ella vive'],
        ['On vius?', '¿Dónde vives?'],
        ['Visc a Barcelona.', 'Vivo en Barcelona.'],
      ],
      tip: 'Con ciudades y lugares usamos «a»: «Visc a Girona».',
    },
    {
      title: 'Hi ha',
      rows: [
        ['Hi ha una taula.', 'Hay una mesa.'],
        ['Hi ha dues cadires.', 'Hay dos sillas.'],
        ['Què hi ha a la cuina?', '¿Qué hay en la cocina?'],
      ],
    },
  ],
  exercises: [
    { type: 'translate', prompt: '¿Dónde vives?', answers: ['On vius?', 'On vius tu?', 'Tu on vius?'] },
    { type: 'translate', prompt: 'Vivo en Lleida.', answers: ['Visc a Lleida.', 'Jo visc a Lleida.'] },
    { type: 'translate', prompt: 'Ella vive en un piso.', answers: ['Ella viu en un pis.', 'Ella viu a un pis.'] },
    { type: 'translate', prompt: 'Hay una mesa en la cocina.', answers: ['Hi ha una taula a la cuina.', 'A la cuina hi ha una taula.'] },
    {
      type: 'translate',
      prompt: 'La silla está al lado de la mesa.',
      answers: ['La cadira és al costat de la taula.', 'La cadira està al costat de la taula.'],
    },
    {
      type: 'translate',
      prompt: 'El gato está debajo de la cama.',
      answers: ['El gat és a sota del llit.', 'El gat està a sota del llit.', 'El gat és sota el llit.', 'El gat està sota el llit.'],
    },
    {
      type: 'translate',
      prompt: '¿Qué hay en el salón?',
      answers: ["Què hi ha a la sala d'estar?", 'Què hi ha a la sala?', 'Què hi ha al saló?'],
    },

    { type: 'select', prompt: 'Jo ___ a Sabadell.', hint: 'Yo vivo en Sabadell.', options: ['visc', 'vius', 'viu'], answer: 'visc' },
    { type: 'select', prompt: 'On ___ la teva germana?', hint: '¿Dónde vive tu hermana?', options: ['visc', 'vius', 'viu'], answer: 'viu' },
    { type: 'select', prompt: "A l'habitació ___ un llit.", hint: 'En la habitación hay una cama.', options: ['hi ha', 'és', 'té'], answer: 'hi ha' },
    {
      type: 'select',
      prompt: 'El sofà és ___ la finestra.',
      hint: 'El sofá está delante de la ventana.',
      options: ['davant de', 'darrere de', 'a sota de', 'dins de'],
      answer: 'davant de',
    },
    { type: 'select', prompt: 'La làmpada és al costat ___ sofà.', hint: 'La lámpara está al lado del sofá.', options: ['del', 'de la', 'de el'], answer: 'del' },
    { type: 'select', prompt: '¿Qué significa «a prop de»?', options: ['cerca de', 'lejos de', 'al lado de', 'entre'], answer: 'cerca de' },

    { type: 'listen', text: 'On vius?' },
    { type: 'listen', text: 'Visc a Barcelona.' },
    { type: 'listen', text: 'Hi ha dues cadires a la cuina.', answers: ['Hi ha 2 cadires a la cuina.'] },
    { type: 'listen', text: 'La taula és davant de la finestra.' },
  ],
};

export default lesson;
