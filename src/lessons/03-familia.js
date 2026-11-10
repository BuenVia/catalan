const lesson = {
  id: 'familia',
  icon: '👨‍👩‍👧',
  title: 'La família',
  subtitle: 'La familia · aquest/aquesta · posesivos',
  notes: [
    {
      title: 'La família',
      rows: [
        ['el pare', 'el padre'],
        ['la mare', 'la madre'],
        ['els pares', 'los padres'],
        ['el germà', 'el hermano'],
        ['la germana', 'la hermana'],
        ['el fill', 'el hijo'],
        ['la filla', 'la hija'],
        ["l'avi", 'el abuelo'],
        ["l'àvia", 'la abuela'],
        ["l'oncle", 'el tío'],
        ['la tia', 'la tía'],
        ['el cosí', 'el primo'],
        ['la cosina', 'la prima'],
        ['el marit', 'el marido'],
        ['la dona', 'la mujer / la esposa'],
      ],
    },
    {
      title: 'Aquest',
      rows: [
        ['aquest', 'este'],
        ['aquesta', 'esta'],
        ['aquests', 'estos'],
        ['aquestes', 'estas'],
      ],
    },
    {
      title: 'Possessius',
      rows: [
        ['el meu · la meva · els meus · les meves', 'mi · mis'],
        ['el teu · la teva · els teus · les teves', 'tu · tus'],
        ['el seu · la seva · els seus · les seves', 'su · sus'],
      ],
      tip: 'En catalán el posesivo va con artículo: «el meu pare» = «mi padre».',
    },
  ],
  exercises: [
    { type: 'translate', prompt: 'Este es mi padre.', answers: ['Aquest és el meu pare.'] },
    { type: 'translate', prompt: 'Esta es mi madre.', answers: ['Aquesta és la meva mare.'] },
    { type: 'translate', prompt: 'Tu hermano se llama Marc.', answers: ['El teu germà es diu Marc.'] },
    { type: 'translate', prompt: 'Su hermana es de Tarragona.', answers: ['La seva germana és de Tarragona.'] },
    { type: 'translate', prompt: 'Mis abuelos son de Vic.', answers: ['Els meus avis són de Vic.'] },
    { type: 'translate', prompt: '¿Tienes hermanos?', answers: ['Tens germans?', 'Tu tens germans?'] },
    { type: 'translate', prompt: 'la abuela', answers: ["l'àvia"] },

    { type: 'select', prompt: '___ és la meva germana.', hint: 'Esta es mi hermana.', options: ['Aquest', 'Aquesta', 'Aquests', 'Aquestes'], answer: 'Aquesta' },
    { type: 'select', prompt: 'Aquest és ___ cosí.', hint: 'Este es mi primo.', options: ['el meu', 'la meva', 'els meus', 'les meves'], answer: 'el meu' },
    { type: 'select', prompt: 'Les ___ filles es diuen Anna i Clara.', hint: 'Mis hijas se llaman Anna y Clara.', options: ['meu', 'meva', 'meus', 'meves'], answer: 'meves' },
    { type: 'select', prompt: 'Ella i ___ marit són de Reus.', hint: 'Ella y su marido son de Reus.', options: ['el seu', 'la seva', 'els seus', 'les seves'], answer: 'el seu' },
    { type: 'select', prompt: '___ són els teus pares?', hint: '¿Estos son tus padres?', options: ['Aquest', 'Aquesta', 'Aquests', 'Aquestes'], answer: 'Aquests' },
    { type: 'select', prompt: '¿Qué significa «l’oncle»?', options: ['el tío', 'el abuelo', 'el primo', 'el hijo'], answer: 'el tío' },

    { type: 'listen', text: 'Aquesta és la meva àvia.' },
    { type: 'listen', text: 'El seu fill té deu anys.', answers: ['El seu fill té 10 anys.'] },
    { type: 'listen', text: 'Tinc un germà i una germana.' },
    { type: 'listen', text: 'Aquests són els meus pares.' },
  ],
};

export default lesson;
