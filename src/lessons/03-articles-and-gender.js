const lesson = {
  id: 'ca-a1-lesson-03',
  icon: '🏷️',
  title: 'Articles and gender',
  level: 'A1',
  category: 'Nouns and adjectives',
  explanation: `
Every Catalan noun is masculine or feminine.

## Definite articles: the
|             singular   plural
| masculine   el         els
| feminine    la         les

## Before a vowel or h
Singular **el** and **la** usually shorten to **l'**:
- **l'**home, **l'**amic, **l'**hora, **l'**amiga

## Indefinite articles: a, some
- **un** llibre, **una** taula
- **uns** llibres, **unes** taules

## Spotting the gender
- Words ending in **-a** are usually feminine: la casa, la taula.
- Many others are masculine: el gos, el cotxe.
- Some must simply be learned: **la** clau, **el** dia, **la** llet.

## Masculine to feminine
- el noi → la noia
- el gat → la gata
- el professor → la professora
`,
  exercises: [
    { id: 'ca-a1-031', english: 'The dog is big.', pattern: 'El gos és gran.' },
    { id: 'ca-a1-032', english: 'The table is small.', pattern: 'La taula és petita.' },
    { id: 'ca-a1-033', english: 'The man is here.', pattern: "L'home és aquí.", alsoAccepted: ["L'home està aquí."] },
    { id: 'ca-a1-034', english: 'The friend (m) is from Lleida.', pattern: "L'amic és de Lleida." },
    { id: 'ca-a1-035', english: 'I have a book.', pattern: '{|Jo }tinc un llibre.' },
    { id: 'ca-a1-036', english: 'She has a house.', pattern: '{|Ella }té una casa.' },
    { id: 'ca-a1-037', english: 'The boy and the girl are friends.', pattern: 'El noi i la noia són amics.' },
    { id: 'ca-a1-038', english: 'The school is nearby.', pattern: "L'escola és a prop." },
    { id: 'ca-a1-039', english: 'The car is new.', pattern: 'El cotxe és nou.' },
    { id: 'ca-a1-040', english: 'The woman is a doctor.', pattern: 'La dona és metgessa.', alsoAccepted: ['La dona és doctora.'] },
    { id: 'ca-a1-041', english: 'The key is on the table.', pattern: 'La clau és a la taula.', alsoAccepted: ['La clau és sobre la taula.'] },
    { id: 'ca-a1-042', english: 'The cat is black.', pattern: 'El gat és negre.' },
    { id: 'ca-a1-043', english: 'I want a coffee and a glass of water.', pattern: "{|Jo }vull un cafè i un got d'aigua." },
    { id: 'ca-a1-044', english: 'The hotel is in the centre.', pattern: "L'hotel és al centre." },
    { id: 'ca-a1-045', english: "It's a good day.", pattern: 'És un bon dia.' },
  ],
};

export default lesson;
