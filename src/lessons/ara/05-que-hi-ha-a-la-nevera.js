const lesson = {
  id: 'ca-ara-lesson-05',
  icon: '🥗',
  title: 'Què hi ha a la nevera? What’s in the fridge?',
  level: 'A1',
  category: 'Food',
  explanation: `
Talk about food, meals and shopping, and plan the week's meals.

## Food
- **el pa**: bread, **la llet**: milk, **els ous**: eggs
- **el formatge**: cheese, **el pernil**: ham, **la mantega**: butter
- **la carn**: meat, **el pollastre**: chicken, **el peix**: fish
- **l'arròs**: rice, **la pasta**: pasta, **les llenties**: lentils
- **la fruita**: fruit, **la poma**: apple, **la taronja**: orange
- **la verdura**: vegetables, **l'enciam**: lettuce, **el tomàquet**: tomato, **la patata**: potato
- **l'amanida**: salad, **el iogurt**: yoghurt, **les postres**: dessert
- **l'aigua**: water, **el suc**: juice, **el cafè**: coffee, **el te**: tea

## Meals are verbs too
|                     noun          verb
| breakfast           l'esmorzar    esmorzar
| lunch               el dinar      dinar
| afternoon snack     el berenar    berenar
| dinner              el sopar      sopar
**Dinem llenties.** We have lentils for lunch.

## Menjar and beure
|             menjar      beure
| jo          menjo       bec
| tu          menges      beus
| ell/ella    menja       beu
| nosaltres   mengem      bevem
| vosaltres   mengeu      beveu
| ells/elles  mengen      beuen

## Days of the week
**dilluns**, **dimarts**, **dimecres**, **dijous**, **divendres**, **dissabte**, **diumenge**
- **Dilluns** dinem llenties. On Monday we have lentils.
- **Els dilluns** dinem llenties. On Mondays (every week) we have lentils.

## Quantities
- **un litre de** llet: a litre of milk
- **un quilo de** pomes: a kilo of apples
- **una dotzena d'ous**: a dozen eggs
- **una mica de** / **una mica d'**: a bit of
- **Queda** una mica d'arròs. There's a bit of rice left.

## Likes
**M'agrada** la fruita. I like fruit. **No m'agrada** el peix. I don't like fish.

## Task: plan a weekly menu
Dilluns dinem llenties i sopem peix amb amanida. Dimarts dinem arròs amb pollastre. De postres, iogurt o fruita.
`,
  exercises: [
    { id: 'ca-ara-061', english: "What's in the fridge?", pattern: 'Què hi ha a la nevera?' },
    { id: 'ca-ara-062', english: "There's milk, eggs and cheese.", pattern: 'Hi ha llet, ous i formatge.' },
    { id: 'ca-ara-063', english: "There's no fruit.", pattern: 'No hi ha fruita.' },
    { id: 'ca-ara-064', english: 'On Monday we have lentils for lunch.', pattern: '{Dilluns|El dilluns} {|nosaltres }dinem llenties.' },
    { id: 'ca-ara-065', english: 'On Tuesday we have fish and salad for dinner.', pattern: '{Dimarts|El dimarts} {|nosaltres }sopem peix i amanida.' },
    { id: 'ca-ara-066', english: 'I have breakfast at eight.', pattern: '{|Jo }esmorzo a les vuit.' },
    { id: 'ca-ara-067', english: "I don't eat meat.", pattern: '{|Jo }no menjo carn.' },
    { id: 'ca-ara-068', english: 'Do you (tu) drink coffee or tea?', pattern: 'Beus cafè o te?', alsoAccepted: ['Tu beus cafè o te?'] },
    { id: 'ca-ara-069', english: 'We need a litre of milk.', pattern: '{|Nosaltres }necessitem un litre de llet.' },
    { id: 'ca-ara-070', english: 'A dozen eggs, please.', pattern: "Una dotzena d'ous, si us plau." },
    { id: 'ca-ara-071', english: "There's a bit of rice left.", pattern: "Queda una mica d'arròs." },
    { id: 'ca-ara-072', english: 'On Sundays we eat paella.', pattern: '{Els diumenges|El diumenge} {|nosaltres }mengem paella.' },
    { id: 'ca-ara-073', english: "I like fruit, but I don't like vegetables.", pattern: "M'agrada la fruita, però no m'agraden les verdures.", alsoAccepted: ["M'agrada la fruita, però no m'agrada la verdura."] },
    { id: 'ca-ara-074', english: 'For dessert, yoghurt or fruit.', pattern: 'De postres, iogurt o fruita.' },
    { id: 'ca-ara-075', english: 'Is there any orange juice?', pattern: 'Hi ha suc de taronja?' },
  ],
};

export default lesson;
