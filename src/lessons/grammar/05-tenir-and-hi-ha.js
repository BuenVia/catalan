const lesson = {
  id: 'ca-a1-lesson-05',
  icon: '🎒',
  title: 'Tenir and hi ha',
  level: 'A1',
  category: 'Verbs: Essentials',
  explanation: `
**Tenir** means "to have", and **hi ha** means "there is" or "there are".

## Tenir
| jo          tinc
| tu          tens
| ell/ella    té
| nosaltres   tenim
| vosaltres   teniu
| ells/elles  tenen

## Age and feelings
Catalan uses tenir where English uses "to be":
- **Tinc** vint anys. I'm twenty.
- **Tinc** gana. I'm hungry.
- **Tinc** set. I'm thirsty.
- **Tinc** son. I'm sleepy.
- **Tinc** fred / calor. I'm cold / hot.

## Hi ha
The same form covers singular and plural:
- **Hi ha** un banc. There's a bank.
- **Hi ha** molts turistes. There are many tourists.
- **No hi ha** pa. There's no bread.
- **Hi ha** llet? Is there any milk?

## Obligation
**Haver de** + infinitive means "to have to": **He de** treballar.
`,
  exercises: [
    { id: 'ca-a1-061', english: "I'm twenty years old.", pattern: '{|Jo }tinc vint anys.' },
    { id: 'ca-a1-062', english: 'How old are you (tu)?', pattern: 'Quants anys tens?' },
    { id: 'ca-a1-063', english: "I'm hungry.", pattern: '{|Jo }tinc gana.' },
    { id: 'ca-a1-064', english: 'Are you (tu) thirsty?', pattern: 'Tens set?', alsoAccepted: ['Tu tens set?'] },
    { id: 'ca-a1-065', english: "We're cold.", pattern: '{|Nosaltres }tenim fred.' },
    { id: 'ca-a1-066', english: 'She has two brothers.', pattern: '{|Ella }té dos germans.' },
    { id: 'ca-a1-067', english: 'Do you (vosaltres) have a car?', pattern: 'Teniu cotxe?', alsoAccepted: ['Vosaltres teniu cotxe?'] },
    { id: 'ca-a1-068', english: 'They have a big house.', pattern: '{|Ells |Elles }tenen una casa gran.' },
    { id: 'ca-a1-069', english: "There's a bank nearby.", pattern: 'Hi ha un banc a prop.' },
    { id: 'ca-a1-070', english: 'There are many tourists.', pattern: 'Hi ha molts turistes.' },
    { id: 'ca-a1-071', english: "There's no bread.", pattern: 'No hi ha pa.' },
    { id: 'ca-a1-072', english: 'Is there any milk?', pattern: 'Hi ha llet?' },
    { id: 'ca-a1-073', english: "There's a cat in the garden.", pattern: 'Hi ha un gat al jardí.' },
    { id: 'ca-a1-074', english: "I don't have time today.", pattern: 'Avui {|jo }no tinc temps.', alsoAccepted: ['{|Jo }no tinc temps avui.'] },
    { id: 'ca-a1-075', english: 'I have to work.', pattern: '{|Jo }he de treballar.' },
  ],
};

export default lesson;
