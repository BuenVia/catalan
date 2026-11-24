const lesson = {
  id: 'ca-a1-lesson-14',
  icon: '📍',
  title: 'Where things are and ordinal numbers',
  level: 'A1',
  category: 'Position and order',
  explanation: `
Say where something is, and which one it is in a row.

## Where things are
- **a sobre de** or **damunt de**: on, on top of
- **per sobre de**: above
- **sota** or **a sota de**: under, below
- **davant de**: in front of
- **darrere de**: behind
- **al costat de**: next to, beside
- **a l'esquerra (de)**: on the left (of)
- **a la dreta (de)**: on the right (of)

## Use ser
Location normally takes **ser**: El gat **és** sota el llit.

## de + el becomes del
- davant **del** sofà, al costat **del** llit
- davant **de la** taula, al costat **de l'**armari

## Ordinal numbers
|      masc.     fem.
| 1st  primer    primera
| 2nd  segon     segona
| 3rd  tercer    tercera
| 4th  quart     quarta
| 5th  cinquè    cinquena
| 6th  sisè      sisena
| 7th  setè      setena
| 8th  vuitè     vuitena
| 9th  novè      novena
| 10th desè      desena

## Agreement
Ordinals agree with the noun and come before it:
- el **primer** pis, la **primera** porta
- els **primers** dies, les **primeres** cases

## Floors and doors
Catalan addresses give the floor and then the door, so **segon primera** (2n 1a) is the second floor, first door. The ground floor is **la planta baixa**.
`,
  exercises: [
    { id: 'ca-a1-196', english: 'The lamp is on top of the chest of drawers.', pattern: '{El llum|La làmpada} és {a sobre de|damunt de|a sobre|sobre} la calaixera.' },
    { id: 'ca-a1-197', english: 'The cat is under the bed.', pattern: 'El gat {és|està} {sota el|a sota del} llit.' },
    { id: 'ca-a1-198', english: 'The television is in front of the sofa.', pattern: 'La {televisió|tele} és davant del sofà.' },
    { id: 'ca-a1-199', english: 'The garden is behind the house.', pattern: 'El jardí és darrere {de |}la casa.' },
    { id: 'ca-a1-200', english: 'The chair is next to the table.', pattern: 'La cadira és al costat de la taula.' },
    { id: 'ca-a1-201', english: 'The bathroom is on the left.', pattern: "El bany és a l'esquerra." },
    { id: 'ca-a1-202', english: 'The wardrobe is to the right of the bed.', pattern: "L'armari és a la dreta del llit." },
    { id: 'ca-a1-203', english: "There's a mirror above the sink.", pattern: 'Hi ha un mirall {a sobre del|per sobre del|damunt del} lavabo.' },
    { id: 'ca-a1-204', english: "It's the first door on the left.", pattern: "És la primera porta a l'esquerra." },
    { id: 'ca-a1-205', english: 'The bathroom is the second door on the right.', pattern: 'El bany és la segona porta a la dreta.' },
    { id: 'ca-a1-206', english: 'The office is on the third floor.', pattern: "L'oficina és {al tercer pis|a la tercera planta}." },
    { id: 'ca-a1-207', english: "We're on the tenth floor.", pattern: '{|Nosaltres }{som|estem} al desè pis.', alsoAccepted: ['{|Nosaltres }{som|estem} a la desena planta.'] },
    { id: 'ca-a1-208', english: "It's the fifth street on the right.", pattern: 'És el cinquè carrer a la dreta.' },
    { id: 'ca-a1-209', english: 'The seventh house is very pretty.', pattern: 'La setena casa és molt bonica.' },
    { id: 'ca-a1-210', english: 'This is the ninth time.', pattern: 'És la novena vegada.', alsoAccepted: ['És el novè cop.'] },
  ],
};

export default lesson;
