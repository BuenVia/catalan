const lesson = {
  id: 'ca-ara-lesson-03',
  icon: '🏘️',
  title: 'El meu carrer. My street',
  level: 'A1',
  category: 'Neighbourhood',
  explanation: `
Describe a street or a neighbourhood, such as where someone in your family lives.

## Family
- **el pare** / **la mare**: father / mother, **els pares**: parents
- **el germà** / **la germana**: brother / sister
- **el fill** / **la filla**: son / daughter, **els fills**: children
- **l'avi** / **l'àvia**: grandfather / grandmother
- **l'oncle** / **la tia**: uncle / aunt
- **el cosí** / **la cosina**: cousin

## His, her and their
**El seu**, **la seva**, **els seus**, **les seves** mean "his", "her" or "their". They agree with the thing owned, not the owner:
- **La meva germana** viu a Gràcia. **El seu carrer** és tranquil. My sister lives in Gràcia. Her street is quiet.
- **El carrer de la meva àvia**: my grandmother's street (Catalan has no 's)

## In the neighbourhood
- **el barri**: neighbourhood, **el centre**: town centre
- **la plaça**: square, **el parc**: park, **la platja**: beach
- **la botiga**: shop, **el mercat**: market, **l'escola**: school
- **el bar**, **el restaurant**, **la cafeteria**
- **l'estació de metro**: metro station
- **el carrer de vianants**: pedestrian street
- **l'arbre**: tree, **el trànsit**: traffic
- **els veïns**: neighbours

## How much, how many
**Molt** and **poc** agree with the noun:
|               masc.          fem.
| singular      molt trànsit   molta gent
| plural        molts bars     moltes botigues
- **No hi ha gaires** arbres. There aren't many trees.
- **No hi ha cap** estació. There's no station at all.
- **Hi ha alguns** bars. There are some bars.

## Describing it
- **animat**: lively, **tranquil**: quiet, **sorollós**: noisy
- **antic**: old, **modern**: modern, **bonic**: pretty
- **ample** / **estret**: wide / narrow
- **a prop de** / **lluny de**: near / far from
- **al final del carrer**: at the end of the street

## This and that
|               masc.      fem.
| this          aquest     aquesta
| that          aquell     aquella

## Task: describe the street or neighbourhood of someone in your family
La meva germana viu en un barri molt animat. El seu carrer és estret i tranquil. Al seu barri hi ha moltes botigues, però no hi ha gaires arbres.
`,
  exercises: [
    { id: 'ca-ara-031', english: 'My sister lives in a very lively neighbourhood.', pattern: 'La meva germana viu {en|a} un barri molt animat.' },
    { id: 'ca-ara-032', english: 'Her street is narrow and quiet.', pattern: 'El seu carrer és estret i tranquil.' },
    { id: 'ca-ara-033', english: 'There are lots of shops in her neighbourhood.', pattern: 'Al seu barri hi ha moltes botigues.', alsoAccepted: ['Hi ha moltes botigues al seu barri.'] },
    { id: 'ca-ara-034', english: "There aren't many trees.", pattern: 'No hi ha {gaires|molts} arbres.' },
    { id: 'ca-ara-035', english: 'My parents live near the beach.', pattern: 'Els meus pares viuen a prop de la platja.' },
    { id: 'ca-ara-036', english: "There's a park at the end of the street.", pattern: 'Hi ha un parc al final del carrer.', alsoAccepted: ['Al final del carrer hi ha un parc.'] },
    { id: 'ca-ara-037', english: "My grandmother's street is very old.", pattern: 'El carrer de la meva àvia és molt antic.' },
    { id: 'ca-ara-038', english: "There's a market and a school.", pattern: 'Hi ha un mercat i una escola.' },
    { id: 'ca-ara-039', english: 'My brother lives on a pedestrian street.', pattern: 'El meu germà viu {en|a} un carrer de vianants.' },
    { id: 'ca-ara-040', english: 'The neighbours are very friendly.', pattern: 'Els veïns són molt {simpàtics|amables}.' },
    { id: 'ca-ara-041', english: 'This square is very pretty.', pattern: 'Aquesta plaça és molt bonica.' },
    { id: 'ca-ara-042', english: "There's no metro station nearby.", pattern: 'No hi ha {cap |}estació de metro a prop.' },
    { id: 'ca-ara-043', english: "My uncle's neighbourhood is far from the centre.", pattern: 'El barri del meu oncle és lluny del centre.' },
    { id: 'ca-ara-044', english: 'There are some bars and restaurants.', pattern: 'Hi ha {alguns|uns quants} bars i restaurants.' },
    { id: 'ca-ara-045', english: "There's a lot of traffic.", pattern: 'Hi ha molt{ de|} trànsit.' },
  ],
};

export default lesson;
