const lesson = {
  id: 'ca-verb-lesson-01',
  icon: '🌟',
  title: 'Ser: to be',
  level: 'A1',
  category: 'Irregular',
  explanation: `
**Ser** says what something or someone is: identity, origin, job, character, the time and the day.

## Present tense
| jo          soc
| tu          ets
| ell/ella    és
| nosaltres   som
| vosaltres   sou
| ells/elles  són
Older books write **sóc**. Since the 2017 spelling reform it's **soc**.

## When to use it
- Who or what: **Soc** professora. **Qui és?**
- Where from: **Són** de València.
- What it's like: **És** molt alta. **No és** car.
- The time and the day: **És** la una. **Són** les tres. Avui **és** dilluns.
- Where a place or an event is: L'estació **és** a prop. La festa **és** a casa de la Marta.

## Ser or estar?
**Ser** is for what something is. **Estar** is for how it is now: **És** simpàtic (he's a friendly person), **està** cansat (he's tired at the moment). See the next lesson.
`,
  exercises: [
    { id: 'ca-verb-001', english: "I'm a teacher.", pattern: '{|Jo }{soc|sóc} {professor|professora}.' },
    { id: 'ca-verb-002', english: 'Are you (tu) from Girona?', pattern: '{|Tu }ets de Girona?' },
    { id: 'ca-verb-003', english: 'My sister is very tall.', pattern: 'La meva germana és molt alta.' },
    { id: 'ca-verb-004', english: "We're friends.", pattern: '{|Nosaltres }som {amics|amigues}.' },
    { id: 'ca-verb-005', english: 'Are you (vosaltres) students?', pattern: '{|Vosaltres }sou estudiants?' },
    { id: 'ca-verb-006', english: "They're from Valencia.", pattern: '{|Ells |Elles }són de València.' },
    { id: 'ca-verb-007', english: "What time is it? It's one o'clock.", pattern: 'Quina hora és? És la una.' },
    { id: 'ca-verb-008', english: "It's three o'clock.", pattern: 'Són les tres.' },
    { id: 'ca-verb-009', english: 'Who is it?', pattern: 'Qui és?' },
    { id: 'ca-verb-010', english: 'This is my house.', pattern: 'Aquesta és {la meva casa|casa meva}.' },
    { id: 'ca-verb-011', english: 'The station is near here.', pattern: "L'estació és a prop d'aquí." },
    { id: 'ca-verb-012', english: "It isn't expensive.", pattern: 'No és car.' },
    { id: 'ca-verb-013', english: 'Today is Monday.', pattern: 'Avui és dilluns.' },
    { id: 'ca-verb-014', english: 'What is this?', pattern: 'Què és això?' },
    { id: 'ca-verb-015', english: "The party is at Marta's house.", pattern: 'La festa és a casa de{| la} Marta.' },
  ],
};

export default lesson;
