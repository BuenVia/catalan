const lesson = {
  id: 'ca-ara-lesson-07',
  icon: '🏛️',
  title: 'On és l’ajuntament? Where’s the town hall?',
  level: 'A1',
  category: 'Local services',
  explanation: `
Find your way to a local council office, introduce yourself there and ask for information.

## Local services
- **l'ajuntament**: town hall, council
- **l'oficina d'atenció ciutadana (OAC)**: council information office
- **empadronar-se**: to register as a resident (**el padró** is the register)
- **el centre de salut** or **el CAP**: health centre
- **la targeta sanitària**: health card
- **la cita prèvia**: appointment
- **l'horari**: opening hours
- **el formulari**: form

## Asking the way
- **Perdoni, on és** l'ajuntament? Excuse me, where's the town hall?
- **És lluny?** Is it far?
- **És a prop**, **al costat de** / **davant de** l'estació. It's near, next to / opposite the station.

## Directions for vostè
|             vostè
| anar        vagi recte          go straight on
| girar       giri a la dreta     turn right
| agafar      agafi el segon      take the second
**El segon carrer a l'esquerra**: the second street on the left. Ordinals: **primer**, **segon**, **tercer**, **quart**, **cinquè**.

## At the counter
- **Bon dia, em dic** Ahmed. **Voldria informació sobre** el padró. Good morning, my name's Ahmed. I'd like some information about registering.
- **Què he de portar?** What do I have to bring?
- **Ha de portar** el passaport. You have to bring your passport. (vostè)
- **Cal cita prèvia?** Do you need an appointment?

## Haver de: to have to
| jo          he de
| tu          has de
| ell/ella    ha de
| nosaltres   hem de
| vosaltres   heu de
| ells/elles  han de

## Being polite
- **Perdoni**: excuse me (vostè)
- **Si us plau**: please
- **Moltes gràcies per la seva ajuda.** Thank you very much for your help.
- **De res.** You're welcome.

## Task: introduce yourself and ask for information at a council office
Bon dia, em dic Ahmed. Visc al carrer de Sant Pere. Vull empadronar-me. Què he de portar?
`,
  exercises: [
    { id: 'ca-ara-091', english: "Excuse me (vostè), where's the town hall?", pattern: "Perdoni, on és l'ajuntament?" },
    { id: 'ca-ara-092', english: 'Go (vostè) straight on and turn left.', pattern: "{Vagi|Tiri} {recte|tot recte} i giri a {l'esquerra|mà esquerra}." },
    { id: 'ca-ara-093', english: "It's the second street on the right.", pattern: 'És el segon carrer a {la dreta|mà dreta}.', alsoAccepted: ['És la segona a {la dreta|mà dreta}.'] },
    { id: 'ca-ara-094', english: "It's next to the health centre.", pattern: 'És al costat del {centre de salut|CAP}.' },
    { id: 'ca-ara-095', english: "Is the town hall far from here?", pattern: "L'ajuntament {és|està} lluny d'aquí?" },
    { id: 'ca-ara-096', english: "Good morning, I'd like some information.", pattern: 'Bon dia, voldria {|demanar }informació.' },
    { id: 'ca-ara-097', english: 'I live on Sant Pere Street.', pattern: '{|Jo }visc al carrer {de |}Sant Pere.' },
    { id: 'ca-ara-098', english: 'I want to register as a resident.', pattern: '{|Jo }vull empadronar-me.', alsoAccepted: ['{|Jo }em vull empadronar.'] },
    { id: 'ca-ara-099', english: 'What do I have to bring?', pattern: 'Què he de portar?' },
    { id: 'ca-ara-100', english: 'You (vostè) have to bring your passport.', pattern: '{|Vostè }ha de portar el passaport.' },
    { id: 'ca-ara-101', english: 'Do I need an appointment?', pattern: '{Necessito|Cal} cita prèvia?' },
    { id: 'ca-ara-102', english: 'What are the opening hours?', pattern: "Quin és l'horari?" },
    { id: 'ca-ara-103', english: 'The office is open from nine to two.', pattern: "L'oficina {obre|està oberta} de nou a dues." },
    { id: 'ca-ara-104', english: 'How can I get the health card?', pattern: 'Com puc {demanar|aconseguir} la targeta sanitària?' },
    { id: 'ca-ara-105', english: 'Thank you very much for your (vostè) help.', pattern: "Moltes gràcies per {la seva ajuda|l'ajuda}." },
  ],
};

export default lesson;
