const lesson = {
  id: 'ca-a1-lesson-16',
  icon: '🧭',
  title: 'Asking for and giving directions',
  level: 'A1',
  category: 'Around town',
  explanation: `
Ask the way, and explain how to get somewhere.

## Asking the way
- **Perdoni, on és** l'estació? Excuse me, where's the station?
- **Com puc anar a** la platja? How can I get to the beach?
- **Hi ha** una farmàcia **per aquí**? Is there a pharmacy around here?
- **És lluny?** Is it far?

## How far it is
- **És a prop.** It's near.
- **És a cinc minuts a peu.** It's five minutes' walk.

## Directions in the present tense
The easiest way to give directions is the present tense:
- **Vas tot recte.** You go straight ahead. (**tot dret** is also common)
- **Agafes** el primer carrer. You take the first street.
- **Gires a la dreta.** You turn right.
- **Travesses** la plaça. You cross the square.
- **Segueixes** or **continues fins al** semàfor. You carry on as far as the traffic lights.

## Left and right
**a la dreta** or **a mà dreta**: on the right
**a l'esquerra** or **a mà esquerra**: on the left

## You'll also hear commands
|             tu          vostè
| girar       gira        giri
| agafar      agafa       agafi
| travessar   travessa    travessi
| seguir      segueix     segueixi
| continuar   continua    continuï
| anar        ves         vagi

## Useful places to mention
- **al final del carrer**: at the end of the street
- **a la cantonada**: on the corner
- **davant de**: opposite, in front of
- **l'església**: church, **el museu**: museum, **l'estació**: station
`,
  exercises: [
    { id: 'ca-a1-226', english: 'Excuse me (vostè), is there a pharmacy near here?', pattern: "Perdoni, hi ha una farmàcia {a prop d'aquí|per aquí}?" },
    { id: 'ca-a1-227', english: 'How can I get to the station?', pattern: "Com {puc anar|puc arribar|vaig} a l'estació?" },
    { id: 'ca-a1-228', english: 'Is it far?', pattern: 'És lluny?', alsoAccepted: ['Està lluny?'] },
    { id: 'ca-a1-229', english: "No, it's very near.", pattern: 'No, {és|està} molt a prop.' },
    { id: 'ca-a1-230', english: "It's five minutes' walk.", pattern: '{És|Està} a cinc minuts {a peu|caminant}.' },
    { id: 'ca-a1-231', english: 'You (tu) go straight ahead.', pattern: '{|Tu }vas tot {recte|dret}.', alsoAccepted: ['{Ves|Vés} tot {recte|dret}.'] },
    { id: 'ca-a1-232', english: 'You (tu) take the second street on the left.', pattern: "{Agafes|Agafa} el segon carrer a {l'esquerra|mà esquerra}." },
    { id: 'ca-a1-233', english: 'You (tu) turn right at the traffic lights.', pattern: '{Gires|Gira} a {la dreta|mà dreta} al semàfor.', alsoAccepted: ['Al semàfor, {gires|gira} a {la dreta|mà dreta}.'] },
    { id: 'ca-a1-234', english: 'You (vostè) cross the square.', pattern: '{|Vostè }travessa la plaça.', alsoAccepted: ['Travessi la plaça.'] },
    { id: 'ca-a1-235', english: 'You (vostè) carry on to the end of the street.', pattern: '{|Vostè }{segueix|continua} fins al final del carrer.', alsoAccepted: ['{Segueixi|Continuï} fins al final del carrer.'] },
    { id: 'ca-a1-236', english: 'Turn (vostè) left at the corner.', pattern: "Giri a {l'esquerra|mà esquerra} a la cantonada.", alsoAccepted: ["A la cantonada, giri a {l'esquerra|mà esquerra}."] },
    { id: 'ca-a1-237', english: 'Take (tu) the first street on the right.', pattern: 'Agafa el primer carrer a {la dreta|mà dreta}.' },
    { id: 'ca-a1-238', english: 'The bank is opposite the church.', pattern: "El banc és {davant|al davant} de l'església." },
    { id: 'ca-a1-239', english: 'The museum is at the end of this street.', pattern: "El museu és al final d'aquest carrer." },
    { id: 'ca-a1-240', english: 'Go (tu) as far as the square and turn left.', pattern: "{Ves|Vés} fins a la plaça i gira a {l'esquerra|mà esquerra}." },
  ],
};

export default lesson;
