const lesson = {
  id: 'ca-verb-lesson-07',
  icon: '💬',
  title: 'Dir: to say, to tell',
  level: 'A1',
  category: 'Irregular',
  explanation: `
**Dir** means "to say" or "to tell". With **es** it gives names (**dir-se**), and **voler dir** means "to mean".

## Present tense
| jo          dic
| tu          dius
| ell/ella    diu
| nosaltres   diem
| vosaltres   dieu
| ells/elles  diuen

## Saying and telling
- **Què dius?** What are you saying?
- **Diu que** està cansat. He says he's tired.
- **Diuen que** és molt car. They say it's very expensive.
- **No dic res.** I'm not saying anything.

## Names and words
- **Em dic** Pau. My name's Pau. **Com es diu** el teu professor?
- **Els meus amics em diuen** Pep. My friends call me Pep.
- **Com es diu** això en català? How do you say this in Catalan?
- **Què vol dir** aquesta paraula? What does this word mean?

## On the phone
People answer the phone with **Digui?** (vostè) or **Digues?** (tu).
`,
  exercises: [
    { id: 'ca-verb-091', english: 'What are you (tu) saying?', pattern: 'Què dius{| tu}?' },
    { id: 'ca-verb-092', english: 'How do you say this in Catalan?', pattern: 'Com es diu això en català?' },
    { id: 'ca-verb-093', english: "My name's Pau.", pattern: 'Em dic Pau.' },
    { id: 'ca-verb-094', english: "What's your (tu) teacher called?", pattern: 'Com es diu el teu {professor|professora}?' },
    { id: 'ca-verb-095', english: 'She always tells the truth.', pattern: '{|Ella }sempre diu la veritat.', alsoAccepted: ['{|Ella }diu sempre la veritat.'] },
    { id: 'ca-verb-096', english: 'I say hello to my neighbours.', pattern: '{|Jo }dic hola als meus veïns.' },
    { id: 'ca-verb-097', english: 'We say "bon profit" before eating.', pattern: '{|Nosaltres }diem "bon profit" abans de menjar.', alsoAccepted: ['Abans de menjar {|nosaltres }diem "bon profit".'] },
    { id: 'ca-verb-098', english: 'What do you (vosaltres) say?', pattern: 'Què dieu{| vosaltres}?' },
    { id: 'ca-verb-099', english: "They say it's very expensive.", pattern: 'Diuen que és molt car.' },
    { id: 'ca-verb-100', english: 'The sign says "closed".', pattern: 'El cartell diu "tancat".' },
    { id: 'ca-verb-101', english: "I'm not saying anything.", pattern: '{|Jo }no dic res.' },
    { id: 'ca-verb-102', english: 'Hello? (answering the phone)', pattern: 'Digui?', alsoAccepted: ['Digues?'] },
    { id: 'ca-verb-103', english: 'What does this word mean?', pattern: 'Què vol dir aquesta paraula?' },
    { id: 'ca-verb-104', english: "He says he's tired.", pattern: '{|Ell }diu que està cansat.' },
    { id: 'ca-verb-105', english: 'My friends call me Pep.', pattern: 'Els meus amics em diuen Pep.' },
  ],
};

export default lesson;
