const lesson = {
  id: 'ca-verb-lesson-04',
  icon: '🎒',
  title: 'Tenir: to have',
  level: 'A1',
  category: 'Irregular',
  explanation: `
**Tenir** means "to have": things, family, time, age, and many feelings English expresses with "to be".

## Present tense
| jo          tinc
| tu          tens
| ell/ella    té
| nosaltres   tenim
| vosaltres   teniu
| ells/elles  tenen
**Té** keeps its accent, to tell it apart from **te** (tea, or the pronoun).

## When to use it
- What you own and who's in your family: **Tinc** dos fills. **No tenen** cotxe.
- Age: **Té** quaranta anys. **Quants anys tens?**
- Plans and time: Avui **tinc** una reunió. **Teniu** temps?

## Tenir where English uses "to be"
- **tenir gana** / **set**: to be hungry / thirsty
- **tenir fred** / **calor**: to be cold / hot
- **tenir son**: to be sleepy
- **tenir pressa**: to be in a hurry
- **tenir raó**: to be right
- **tenir por (de)**: to be scared (of)
`,
  exercises: [
    { id: 'ca-verb-046', english: 'I have two children.', pattern: '{|Jo }tinc dos fills.' },
    { id: 'ca-verb-047', english: 'Do you (tu) have a pen?', pattern: '{|Tu }tens un bolígraf?' },
    { id: 'ca-verb-048', english: "He's forty years old.", pattern: '{|Ell }té quaranta anys.' },
    { id: 'ca-verb-049', english: 'We have a dog and a cat.', pattern: '{|Nosaltres }tenim un gos i un gat.' },
    { id: 'ca-verb-050', english: 'Do you (vosaltres) have time?', pattern: '{|Vosaltres }teniu temps?' },
    { id: 'ca-verb-051', english: "They don't have a car.", pattern: '{|Ells |Elles }no tenen cotxe.' },
    { id: 'ca-verb-052', english: "I'm hungry and thirsty.", pattern: '{|Jo }tinc gana i set.' },
    { id: 'ca-verb-053', english: 'Are you (tu) cold?', pattern: '{|Tu }tens fred?' },
    { id: 'ca-verb-054', english: "I'm in a hurry.", pattern: '{|Jo }tinc pressa.' },
    { id: 'ca-verb-055', english: "You're (tu) right.", pattern: '{|Tu }tens raó.' },
    { id: 'ca-verb-056', english: "She's scared of dogs.", pattern: '{|Ella }té por dels gossos.' },
    { id: 'ca-verb-057', english: "I'm sleepy.", pattern: '{|Jo }tinc son.' },
    { id: 'ca-verb-058', english: 'The flat has a terrace.', pattern: 'El pis té {una terrassa|terrassa}.' },
    { id: 'ca-verb-059', english: 'I have a meeting today.', pattern: 'Avui {|jo }tinc una reunió.', alsoAccepted: ['{|Jo }tinc una reunió avui.'] },
    { id: 'ca-verb-060', english: 'How old are your (tu) children?', pattern: 'Quants anys tenen els teus fills?' },
  ],
};

export default lesson;
