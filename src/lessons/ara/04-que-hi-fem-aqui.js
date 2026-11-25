const lesson = {
  id: 'ca-ara-lesson-04',
  icon: '📚',
  title: 'Què hi fem, aquí? What do we do here?',
  level: 'A1',
  category: 'The library',
  explanation: `
Visit the library, say what people do there and give your details to get a library card.

## At the library
- **el carnet de la biblioteca**: library card
- **el llibre**: book, **la revista**: magazine, **la pel·lícula**: film
- **l'ordinador**: computer, **el wifi**: Wi-Fi
- **agafar en préstec**: to borrow, **tornar**: to give back
- **gratuït** / **gratuïta**: free (of charge)

## Present tense: three groups
|             parlar      llegir       obrir
| jo          parlo       llegeixo     obro
| tu          parles      llegeixes    obres
| ell/ella    parla       llegeix      obre
| nosaltres   parlem      llegim       obrim
| vosaltres   parleu      llegiu       obriu
| ells/elles  parlen      llegeixen    obren
Most **-ir** verbs add **-eix-** like **llegir**. A few, like **obrir** and **dormir**, don't.

## Hi: "there"
**Hi** stands for a place that's already been mentioned:
- **Què hi fem, aquí?** What do we do here?
- **Vas a la biblioteca? Sí, hi vaig cada dia.** Do you go to the library? Yes, I go there every day.

## Giving your details
- **el nom**: first name, **el cognom**: surname
- **l'adreça**: address, **el número de telèfon**: phone number
- **el correu electrònic**: email, **la data de naixement**: date of birth
- **el DNI**: identity card, **el passaport**: passport
- **Quin és el teu nom?** / **Quina és la teva adreça?** What's your name? / What's your address? (tu)
- **Quin és el seu cognom?** What's your surname? (vostè)
- **Ho pot lletrejar?** Can you spell it? (vostè)

## Asking politely
- **Voldria** fer-me el carnet. I'd like to get a card.
- **Puc** fer servir l'ordinador? Can I use the computer?
- **A quina hora obre** / **tanca**? What time does it open / close?

## Task: visit the library and get a library card
Bon dia, voldria fer-me el carnet de la biblioteca. Em dic Peter Smith. Ho lletrejo: S, M, I, T, H.
`,
  exercises: [
    { id: 'ca-ara-046', english: 'What do we do here?', pattern: 'Què hi fem, aquí?', alsoAccepted: ['Què fem aquí?'] },
    { id: 'ca-ara-047', english: "I'd like to get a library card.", pattern: '{Voldria|Vull} fer-me el carnet{ de la biblioteca|}.' },
    { id: 'ca-ara-048', english: 'Do you (vostè) have your identity card or passport?', pattern: 'Té el DNI o el passaport?' },
    { id: 'ca-ara-049', english: "What's your (vostè) surname?", pattern: 'Quin és el seu cognom?' },
    { id: 'ca-ara-050', english: "What's your (tu) address?", pattern: 'Quina és la teva adreça?' },
    { id: 'ca-ara-051', english: "What's your (tu) phone number?", pattern: 'Quin és el teu {número de telèfon|telèfon}?' },
    { id: 'ca-ara-052', english: 'Can you (vostè) spell it, please?', pattern: 'Ho pot lletrejar, si us plau?', alsoAccepted: ["Pot lletrejar-ho, si us plau?"] },
    { id: 'ca-ara-053', english: 'What time does the library open?', pattern: 'A quina hora obre la biblioteca?' },
    { id: 'ca-ara-054', english: 'The library closes at eight.', pattern: 'La biblioteca tanca a les vuit.' },
    { id: 'ca-ara-055', english: 'How many books can I borrow?', pattern: 'Quants llibres puc {agafar|agafar en préstec|endur-me}?' },
    { id: 'ca-ara-056', english: 'I want to return this book.', pattern: '{|Jo }vull tornar aquest llibre.' },
    { id: 'ca-ara-057', english: 'You (vostè) can use the computers.', pattern: '{|Vostè }pot {fer servir|utilitzar} els ordinadors.' },
    { id: 'ca-ara-058', english: 'People read and study here.', pattern: 'Aquí la gent llegeix i estudia.', alsoAccepted: ['La gent llegeix i estudia aquí.'] },
    { id: 'ca-ara-059', english: 'Is there Wi-Fi?', pattern: 'Hi ha wifi?' },
    { id: 'ca-ara-060', english: 'The card is free.', pattern: 'El carnet és {gratuït|gratis}.' },
  ],
};

export default lesson;
