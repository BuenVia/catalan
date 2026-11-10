const lesson = {
  id: 'salutacions',
  icon: '👋',
  title: 'Salutacions i presentacions',
  subtitle: 'Saludos y presentaciones · ser, dir-se, tenir',
  notes: [
    {
      title: 'Salutacions',
      rows: [
        ['Hola', 'Hola'],
        ['Bon dia', 'Buenos días'],
        ['Bona tarda', 'Buenas tardes'],
        ['Bona nit', 'Buenas noches'],
        ['Adéu', 'Adiós'],
        ['Fins aviat', 'Hasta pronto'],
        ['Fins demà', 'Hasta mañana'],
        ['Molt de gust', 'Mucho gusto'],
        ['Encantat / Encantada', 'Encantado / Encantada'],
      ],
    },
    {
      title: 'Preguntes',
      rows: [
        ['Com et dius?', '¿Cómo te llamas?'],
        ['Com s’escriu?', '¿Cómo se escribe?'],
        ['Quin és el teu cognom?', '¿Cuál es tu apellido?'],
        ['D’on ets?', '¿De dónde eres?'],
        ['Com estàs?', '¿Cómo estás?'],
      ],
    },
    {
      title: 'Ser',
      rows: [
        ['jo soc', 'yo soy'],
        ['tu ets', 'tú eres'],
        ['ell / ella és', 'él / ella es'],
      ],
      tip: 'Con la normativa actual «soc» se escribe sin acento (antes «sóc»).',
    },
    {
      title: 'Dir-se',
      rows: [
        ['jo em dic', 'yo me llamo'],
        ['tu et dius', 'tú te llamas'],
        ['ell / ella es diu', 'él / ella se llama'],
      ],
    },
    {
      title: 'Tenir',
      rows: [
        ['jo tinc', 'yo tengo'],
        ['tu tens', 'tú tienes'],
        ['ell / ella té', 'él / ella tiene'],
      ],
    },
  ],
  exercises: [
    { type: 'translate', prompt: 'Buenos días', answers: ['Bon dia'] },
    { type: 'translate', prompt: '¿Cómo te llamas?', answers: ['Com et dius?'] },
    { type: 'translate', prompt: 'Me llamo Marta.', answers: ['Em dic Marta.', 'Jo em dic Marta.'] },
    { type: 'translate', prompt: '¿De dónde eres?', answers: ["D'on ets?", "D'on ets tu?", "Tu d'on ets?"] },
    {
      type: 'translate',
      prompt: 'Soy de Girona.',
      answers: ['Soc de Girona.', 'Sóc de Girona.', 'Jo soc de Girona.', 'Jo sóc de Girona.'],
    },
    { type: 'translate', prompt: 'Él se llama Pau.', answers: ['Ell es diu Pau.'] },
    { type: 'translate', prompt: '¿Cuál es tu apellido?', answers: ['Quin és el teu cognom?'] },
    { type: 'translate', prompt: '¿Cómo se escribe?', answers: ["Com s'escriu?"] },
    { type: 'translate', prompt: 'Ella tiene un perro.', answers: ['Ella té un gos.'] },

    { type: 'select', prompt: 'Jo ___ de Lleida.', hint: 'Yo soy de Lleida.', options: ['soc', 'ets', 'és', 'tinc'], answer: 'soc' },
    { type: 'select', prompt: 'Tu ___ de València?', hint: '¿Tú eres de Valencia?', options: ['soc', 'ets', 'és', 'tens'], answer: 'ets' },
    { type: 'select', prompt: 'Com ___ dius?', hint: '¿Cómo te llamas?', options: ['em', 'et', 'es'], answer: 'et' },
    { type: 'select', prompt: 'Ell ___ diu Jordi.', hint: 'Él se llama Jordi.', options: ['em', 'et', 'es'], answer: 'es' },
    { type: 'select', prompt: 'Jo ___ un bolígraf.', hint: 'Yo tengo un bolígrafo.', options: ['tinc', 'tens', 'té', 'soc'], answer: 'tinc' },
    { type: 'select', prompt: 'Ella ___ un gat.', hint: 'Ella tiene un gato.', options: ['tinc', 'tens', 'té', 'és'], answer: 'té' },
    {
      type: 'select',
      prompt: '¿Qué significa «Fins demà»?',
      options: ['Hasta mañana', 'Hasta pronto', 'Buenas noches', 'Adiós'],
      answer: 'Hasta mañana',
    },

    { type: 'listen', text: 'Bona tarda' },
    { type: 'listen', text: 'Com et dius?' },
    { type: 'listen', text: 'Em dic Laura.' },
    { type: 'listen', text: "D'on ets?" },
    { type: 'listen', text: 'Ell és de Tarragona.' },
  ],
};

export default lesson;
