const lesson = {
  id: 'ca-a1-lesson-07',
  icon: '📖',
  title: 'Present tense: other verbs',
  level: 'A1',
  category: 'Verbs: Present',
  explanation: `
Verbs in **-re**, **-er** and **-ir** follow different patterns.

## Viure (to live) and beure (to drink)
|             viure   beure
| jo          visc    bec
| tu          vius    beus
| ell/ella    viu     beu
| nosaltres   vivim   bevem
| vosaltres   viviu   beveu
| ells/elles  viuen   beuen

## -ir verbs: two groups
|             dormir   servir
| jo          dormo    serveixo
| tu          dorms    serveixes
| ell/ella    dorm     serveix
| nosaltres   dormim   servim
| vosaltres   dormiu   serviu
| ells/elles  dormen   serveixen

Most -ir verbs add **-eix-** like servir, for example **llegir** (to read). A few, such as **obrir** (to open), don't: **obro, obres, obre**.

## Other common verbs
- **aprendre** (to learn): aprenc, aprens, aprèn, aprenem, apreneu, aprenen
- **llegir** (to read): llegeixo, llegeixes, llegeix, llegim, llegiu, llegeixen
- **escriure** (to write): escric, escrius, escriu, escrivim, escriviu, escriuen
`,
  exercises: [
    { id: 'ca-a1-091', english: 'I live in Barcelona.', pattern: '{|Jo }visc a Barcelona.' },
    { id: 'ca-a1-092', english: 'Where do you (tu) live?', pattern: 'On vius?', alsoAccepted: ['On vius tu?'] },
    { id: 'ca-a1-093', english: 'They live in a small town.', pattern: '{|Ells |Elles }viuen en un poble petit.', alsoAccepted: ['{|Ells |Elles }viuen a un poble petit.'] },
    { id: 'ca-a1-094', english: 'I drink a lot of water.', pattern: '{|Jo }bec molta aigua.' },
    { id: 'ca-a1-095', english: 'Do you (vosaltres) drink wine?', pattern: 'Beveu vi?', alsoAccepted: ['Vosaltres beveu vi?'] },
    { id: 'ca-a1-096', english: "She doesn't drink coffee.", pattern: '{|Ella }no beu cafè.' },
    { id: 'ca-a1-097', english: 'I sleep eight hours.', pattern: '{|Jo }dormo vuit hores.' },
    { id: 'ca-a1-098', english: 'The baby sleeps a lot.', pattern: 'El nadó dorm molt.' },
    { id: 'ca-a1-099', english: 'I read the newspaper every day.', pattern: '{|Jo }llegeixo el diari cada dia.', alsoAccepted: ['{|Jo }llegeixo el diari tots els dies.'] },
    { id: 'ca-a1-100', english: 'He reads a book.', pattern: '{|Ell }llegeix un llibre.' },
    { id: 'ca-a1-101', english: "We're learning Catalan.", pattern: '{|Nosaltres }aprenem català.', alsoAccepted: ['{|Nosaltres }estem aprenent català.'] },
    { id: 'ca-a1-102', english: 'I write a letter.', pattern: '{|Jo }escric una carta.' },
    { id: 'ca-a1-103', english: 'We live near the sea.', pattern: '{|Nosaltres }vivim a prop del mar.' },
    { id: 'ca-a1-104', english: 'The shop opens at nine.', pattern: 'La botiga obre a les nou.' },
    { id: 'ca-a1-105', english: 'You (tu) write very well.', pattern: '{|Tu }escrius molt bé.' },
  ],
};

export default lesson;
