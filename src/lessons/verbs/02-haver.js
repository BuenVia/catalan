const lesson = {
  id: 'ca-verb-lesson-02',
  icon: '📋',
  title: 'Haver: hi ha and haver de',
  level: 'A1',
  category: 'Irregular',
  explanation: `
**Haver** is one of the most common verbs because it forms past tenses. In the present, you'll use it in two ways: **hi ha** (there is, there are) and **haver de** (to have to).

## Present tense
| jo          he
| tu          has
| ell/ella    ha
| nosaltres   hem
| vosaltres   heu
| ells/elles  han

## Hi ha: there is, there are
It never changes for plurals:
- **Hi ha** un problema. There's a problem.
- **Hi ha** molta gent. There are lots of people.
- **No hi ha** cafè. There isn't any coffee.
- **Quants** estudiants **hi ha**? How many students are there?
- **No hi ha ningú.** There's nobody.

## Haver de + infinitive: to have to
- **He de** treballar. I have to work.
- **Has d'**estudiar. You have to study. (**de** becomes **d'** before a vowel)
- **Què he de fer?** What do I have to do?
`,
  exercises: [
    { id: 'ca-verb-016', english: "There's a problem.", pattern: 'Hi ha un problema.' },
    { id: 'ca-verb-017', english: 'There are lots of people.', pattern: 'Hi ha molta gent.' },
    { id: 'ca-verb-018', english: 'Is there a bakery near here?', pattern: "Hi ha {un forn|una fleca} a prop d'aquí?" },
    { id: 'ca-verb-019', english: "There isn't any coffee.", pattern: 'No hi ha cafè.' },
    { id: 'ca-verb-020', english: 'How many students are there?', pattern: 'Quants estudiants hi ha?' },
    { id: 'ca-verb-021', english: "What's on television?", pattern: 'Què hi ha a la {televisió|tele}?' },
    { id: 'ca-verb-022', english: "There's nobody at home.", pattern: 'No hi ha ningú a casa.' },
    { id: 'ca-verb-023', english: 'There are two beds in the room.', pattern: "A l'habitació hi ha dos llits.", alsoAccepted: ["Hi ha dos llits a l'habitació."] },
    { id: 'ca-verb-024', english: 'I have to work tomorrow.', pattern: '{|Jo }he de treballar demà.', alsoAccepted: ['Demà {|jo }he de treballar.'] },
    { id: 'ca-verb-025', english: 'You (tu) have to study more.', pattern: "{|Tu }has d'estudiar més." },
    { id: 'ca-verb-026', english: 'She has to go to the doctor.', pattern: "{|Ella }ha d'anar al metge." },
    { id: 'ca-verb-027', english: 'We have to leave now.', pattern: '{|Nosaltres }hem de marxar ara.', alsoAccepted: ['Ara {|nosaltres }hem de marxar.'] },
    { id: 'ca-verb-028', english: 'Do you (vosaltres) have to work on Saturday?', pattern: '{|Vosaltres }heu de treballar {|el }dissabte?' },
    { id: 'ca-verb-029', english: 'They have to buy bread.', pattern: '{|Ells |Elles }han de comprar pa.' },
    { id: 'ca-verb-030', english: 'What do I have to do?', pattern: 'Què he de fer?' },
  ],
};

export default lesson;
