const lesson = {
  id: 'ca-a1-lesson-08',
  icon: '🚶',
  title: 'Anar, fer, voler and poder',
  level: 'A1',
  category: 'Verbs: Essentials',
  explanation: `
These four common verbs are irregular and are worth learning early.

## Forms
|             anar   fer    voler  poder
| jo          vaig   faig   vull   puc
| tu          vas    fas    vols   pots
| ell/ella    va     fa     vol    pot
| nosaltres   anem   fem    volem  podem
| vosaltres   aneu   feu    voleu  podeu
| ells/elles  van    fan    volen  poden

## Going places
- **Vaig a** Barcelona. I'm going to Barcelona.
- **a** + **el** becomes **al**: Vaig **al** mercat.
- **de** + **el** becomes **del**: Vinc **del** mercat.

## Watch out: vaig + infinitive
This looks like English "I'm going to", but it's a past tense:
- **Vaig menjar.** I ate.
- To talk about the future, use **Menjaré** (I'll eat).

## Fer
- **Què fas?** What are you doing?
- **Fa** sol. It's sunny.
- **Fa** fred / calor. It's cold / hot.

## Voler and poder + infinitive
- **Vull** menjar. I want to eat.
- **Puc** entrar? May I come in?
`,
  exercises: [
    { id: 'ca-a1-106', english: "I'm going to Barcelona.", pattern: '{|Jo }vaig a Barcelona.' },
    { id: 'ca-a1-107', english: "We're going to the market.", pattern: '{|Nosaltres }anem al mercat.' },
    { id: 'ca-a1-108', english: 'Where are you (tu) going?', pattern: 'On vas?', alsoAccepted: ['On vas tu?'] },
    { id: 'ca-a1-109', english: 'They go to school by bus.', pattern: "{|Ells |Elles }van a l'escola amb autobús.", alsoAccepted: ["{|Ells |Elles }van a l'escola en autobús."] },
    { id: 'ca-a1-110', english: "I'm coming from the market.", pattern: '{|Jo }vinc del mercat.' },
    { id: 'ca-a1-111', english: 'What are you (tu) doing?', pattern: 'Què fas?', alsoAccepted: ['Què fas tu?'] },
    { id: 'ca-a1-112', english: "We're making dinner.", pattern: '{|Nosaltres }fem el sopar.' },
    { id: 'ca-a1-113', english: "It's sunny today.", pattern: 'Avui fa sol.', alsoAccepted: ['Fa sol avui.'] },
    { id: 'ca-a1-114', english: "It's very cold.", pattern: 'Fa molt de fred.', alsoAccepted: ['Fa molt fred.'] },
    { id: 'ca-a1-115', english: 'I want to eat.', pattern: '{|Jo }vull menjar.' },
    { id: 'ca-a1-116', english: 'What do you (tu) want?', pattern: 'Què vols?', alsoAccepted: ['Què vols tu?'] },
    { id: 'ca-a1-117', english: 'We want two beers, please.', pattern: '{|Nosaltres }volem dues cerveses, si us plau.' },
    { id: 'ca-a1-118', english: 'May I come in?', pattern: 'Puc entrar?' },
    { id: 'ca-a1-119', english: "You (tu) can't park here.", pattern: '{|Tu }no pots aparcar aquí.' },
    { id: 'ca-a1-120', english: 'Can you (vosaltres) come tomorrow?', pattern: 'Podeu venir demà?', alsoAccepted: ['Vosaltres podeu venir demà?'] },
  ],
};

export default lesson;
