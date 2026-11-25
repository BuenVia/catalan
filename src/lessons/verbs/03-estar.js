const lesson = {
  id: 'ca-verb-lesson-03',
  icon: '📍',
  title: 'Estar: to be (how and where)',
  level: 'A1',
  category: 'Irregular',
  explanation: `
**Estar** says how someone or something is right now, and where people and things are.

## Present tense
| jo          estic
| tu          estàs
| ell/ella    està
| nosaltres   estem
| vosaltres   esteu
| ells/elles  estan

## When to use it
- How you are: **Com estàs?** **Estic** bé. **Estic** cansat.
- A state that can change: La botiga **està** tancada. La sopa **està** freda.
- Where people and things are: **Estem** a casa. Les claus **estan** a la taula. (**Ser** is also correct here: **Som** a casa.)
- Something happening now, with the gerund (**-ant**, **-ent**, **-int**): **Estic** treballant. **Què estàs fent?**

## Useful phrases
- **estar a punt**: to be ready
- **estar ocupat**: to be busy, engaged
- **estar content**: to be happy
`,
  exercises: [
    { id: 'ca-verb-031', english: 'How are you (tu)?', pattern: 'Com estàs{| tu}?' },
    { id: 'ca-verb-032', english: "I'm very well, thanks.", pattern: '{|Jo }estic molt bé, gràcies.' },
    { id: 'ca-verb-033', english: "I'm tired.", pattern: '{|Jo }estic {cansat|cansada}.' },
    { id: 'ca-verb-034', english: "She's ill.", pattern: '{|Ella }està malalta.' },
    { id: 'ca-verb-035', english: "We're at home.", pattern: '{|Nosaltres }{estem|som} a casa.' },
    { id: 'ca-verb-036', english: 'Where are you (vosaltres)?', pattern: 'On {esteu|sou}{| vosaltres}?' },
    { id: 'ca-verb-037', english: 'The keys are on the table.', pattern: 'Les claus {estan|són} a la taula.' },
    { id: 'ca-verb-038', english: 'The shop is closed.', pattern: 'La botiga està tancada.' },
    { id: 'ca-verb-039', english: 'The soup is cold.', pattern: 'La sopa està freda.' },
    { id: 'ca-verb-040', english: "I'm working.", pattern: '{|Jo }estic treballant.' },
    { id: 'ca-verb-041', english: 'What are you (tu) doing?', pattern: 'Què estàs fent?', alsoAccepted: ['Què fas?'] },
    { id: 'ca-verb-042', english: "They're happy.", pattern: '{|Ells }estan contents.', alsoAccepted: ['{|Elles }estan contentes.'] },
    { id: 'ca-verb-043', english: 'The children are sleeping.', pattern: 'Els nens estan dormint.' },
    { id: 'ca-verb-044', english: 'Are you (tu) ready?', pattern: '{|Tu }estàs {a punt|preparat|preparada}?' },
    { id: 'ca-verb-045', english: 'The bathroom is engaged.', pattern: '{El lavabo|El bany} està ocupat.' },
  ],
};

export default lesson;
