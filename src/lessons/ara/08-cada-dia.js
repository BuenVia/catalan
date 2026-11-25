const lesson = {
  id: 'ca-ara-lesson-08',
  icon: '☕',
  title: 'Cada dia. Every day',
  level: 'A1',
  category: 'Routine and plans',
  explanation: `
Describe your daily routine, then arrange to meet friends for a coffee.

## Reflexive verbs
Many routine verbs take **em**, **et**, **es**, **ens**, **us**, **es**:
|             llevar-se (get up)
| jo          em llevo
| tu          et lleves
| ell/ella    es lleva
| nosaltres   ens llevem
| vosaltres   us lleveu
| ells/elles  es lleven
Also **dutxar-se**: to have a shower, **vestir-se** (**em vesteixo**): to get dressed, **rentar-se**: to wash, **posar-se a dormir**: to go to sleep.

## Other routine verbs
- **esmorzar**, **dinar**, **sopar**: have breakfast, lunch, dinner
- **treballar**: to work, **estudiar**: to study, **cuinar**: to cook
- **mirar la televisió**: to watch television

## How often
- **sempre**: always, **normalment**: usually
- **sovint**: often, **a vegades**: sometimes
- **cada dia**: every day
- **mai**: never. After the verb, it needs **no**: **No miro mai la tele.**

## Telling the time
- **A quina hora...?** What time...?
- **a la una**, **a les dues**, **a les set**: at one, at two, at seven
- **a les cinc i mitja** or **a dos quarts de sis**: at half past five
- **al matí**, **a la tarda**, **al vespre**, **a la nit**: in the morning, afternoon, evening, at night
- **de dilluns a divendres**: from Monday to Friday

## Making plans
- **Fem un cafè?** Shall we have a coffee?
- **Quedem dimarts a la tarda?** Shall we meet on Tuesday afternoon?
- **Et va bé dijous?** Does Thursday suit you?
- **Sí, em va bé.** / **No, dimarts no em va bé.** Yes, that suits me. / No, Tuesday's no good for me.
- **Ho sento, no puc.** Sorry, I can't.
- **D'acord! Ens veiem a les cinc.** OK! See you at five.

## Task: arrange two coffees with two classmates
Fem un cafè? Dimarts no em va bé. Et va bé dijous a la tarda? D'acord, ens veiem a dos quarts de sis a la cafeteria.
`,
  exercises: [
    { id: 'ca-ara-106', english: 'I get up at seven.', pattern: '{|Jo }em llevo a les set.' },
    { id: 'ca-ara-107', english: 'I have a shower and get dressed.', pattern: '{|Jo }em dutxo i em vesteixo.' },
    { id: 'ca-ara-108', english: 'I always have breakfast at home.', pattern: '{|Jo }sempre esmorzo a casa.', alsoAccepted: ['{|Jo }esmorzo sempre a casa.'] },
    { id: 'ca-ara-109', english: 'What time do you (tu) have dinner?', pattern: 'A quina hora sopes{| tu}?' },
    { id: 'ca-ara-110', english: 'I work from Monday to Friday.', pattern: '{|Jo }treballo de dilluns a divendres.' },
    { id: 'ca-ara-111', english: 'I never watch television.', pattern: '{|Jo }no miro mai la {televisió|tele}.', alsoAccepted: ['{|Jo }mai {no |}miro la {televisió|tele}.'] },
    { id: 'ca-ara-112', english: 'On Saturdays I get up late.', pattern: '{Els dissabtes|El dissabte} em llevo tard.' },
    { id: 'ca-ara-113', english: 'My husband cooks every day.', pattern: 'El meu marit cuina {cada dia|tots els dies}.' },
    { id: 'ca-ara-114', english: 'Shall we have a coffee?', pattern: '{Fem|Prenem} un cafè?' },
    { id: 'ca-ara-115', english: 'Shall we meet on Tuesday afternoon?', pattern: 'Quedem {|el }dimarts a la tarda?' },
    { id: 'ca-ara-116', english: "Tuesday's no good for me.", pattern: '{Dimarts|El dimarts} no em va bé.', alsoAccepted: ['No em va bé {|el }dimarts.'] },
    { id: 'ca-ara-117', english: 'Does Thursday suit you (tu)?', pattern: 'Et va bé {|el }dijous?', alsoAccepted: ['{|El }dijous et va bé?'] },
    { id: 'ca-ara-118', english: "Sorry, I can't on Wednesday.", pattern: 'Ho sento, {|el }dimecres no puc.', alsoAccepted: ['Ho sento, no puc {|el }dimecres.'] },
    { id: 'ca-ara-119', english: 'See you at half past five at the café.', pattern: 'Ens veiem a {dos quarts de sis|les cinc i mitja} a la cafeteria.' },
    { id: 'ca-ara-120', english: 'OK, see you on Thursday!', pattern: "D'acord, fins {|el }dijous!" },
  ],
};

export default lesson;
