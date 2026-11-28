const lesson = {
  id: 'ca-a1-lesson-02',
  icon: '🪞',
  title: 'Ser and estar',
  level: 'A1',
  category: 'Verbs: Essentials',
  explanation: `
Catalan has two verbs for "to be".

## Forms
|             ser    estar
| jo          sóc    estic
| tu          ets    estàs
| ell/ella    és     està
| nosaltres   som    estem
| vosaltres   sou    esteu
| ells/elles  són    estan

## Ser: who or what something is
- **Sóc** professor. I'm a teacher.
- **És** de Girona. She's from Girona.
- La casa **és** gran. The house is big.

## Estar: how someone is now
- **Estic** cansat. I'm tired.
- **Està** content. He's happy.

## Where something is
Catalan normally uses **ser** for location:
- Barcelona **és** a Catalunya.
- La Marta **és** a casa. (**està** is also common for people)

## Names
In speech, names usually take an article: **la** Marta, **en** Pau.
`,
  exercises: [
    { id: 'ca-a1-016', english: "I'm a teacher.", pattern: '{|Jo }sóc {professor|professora|mestre|mestra}.' },
    { id: 'ca-a1-017', english: "She's from Girona.", pattern: '{|Ella }és de Girona.' },
    { id: 'ca-a1-018', english: "We're students.", pattern: '{|Nosaltres }som {estudiants|alumnes}.' },
    { id: 'ca-a1-019', english: 'Are you (tu) English?', pattern: 'Ets anglès?', alsoAccepted: ['Ets anglesa?', 'Tu ets anglès?', 'Tu ets anglesa?'] },
    { id: 'ca-a1-020', english: 'The house is big.', pattern: 'La casa és gran.' },
    { id: 'ca-a1-021', english: "I'm tired.", pattern: '{|Jo }{estic cansat|estic cansada}.' },
    { id: 'ca-a1-022', english: "He's very happy today.", pattern: 'Avui {|ell }està molt content.', alsoAccepted: ['{|Ell }està molt content avui.'] },
    { id: 'ca-a1-023', english: 'Marta is ill.', pattern: 'La Marta està malalta.' },
    { id: 'ca-a1-024', english: 'How are you (vosaltres)?', pattern: 'Com esteu?' },
    { id: 'ca-a1-025', english: 'Barcelona is in Catalonia.', pattern: 'Barcelona és a Catalunya.' },
    { id: 'ca-a1-026', english: 'Pau is at home.', pattern: 'En Pau és a casa.', alsoAccepted: ['En Pau està a casa.', 'El Pau és a casa.', 'El Pau està a casa.'] },
    { id: 'ca-a1-027', english: 'You (vosaltres) are very kind.', pattern: '{|Vosaltres }sou molt {amables|simpàtics|simpàtiques}.' },
    { id: 'ca-a1-028', english: "They're from Valencia.", pattern: '{|Ells |Elles }són de València.' },
    { id: 'ca-a1-029', english: "We're fine.", pattern: '{|Nosaltres }estem bé.' },
    { id: 'ca-a1-030', english: 'Marta is intelligent.', pattern: 'La Marta és intel·ligent.' },
  ],
};

export default lesson;
