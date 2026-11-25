const lesson = {
  id: 'ca-ara-lesson-06',
  icon: '🚑',
  title: 'El cos. The body',
  level: 'A1',
  category: 'Health',
  explanation: `
Name the parts of the body, say what hurts and ask for help in an emergency.

## The body
- **el cap**: head, **la cara**: face, **els ulls**: eyes
- **el nas**: nose, **la boca**: mouth, **les dents**: teeth, **l'orella**: ear
- **el coll**: neck, throat, **l'esquena**: back, **el pit**: chest
- **la panxa**: stomach, belly
- **el braç**: arm, **la mà**: hand, **el dit**: finger
- **la cama**: leg, **el genoll**: knee, **el peu**: foot

## Saying what hurts
**Fer mal** works like "agradar": the part that hurts is the subject, so the verb is plural for more than one.
|                 one thing               more than one
| to me           em fa mal el cap        em fan mal els peus
| to you (tu)     et fa mal el cap        et fan mal els peus
| to him / her    li fa mal el cap        li fan mal els peus
**Tenir mal de** + body part says the same: **Tinc mal de cap.** I have a headache.

## Feeling ill
- **Tinc febre.** I have a temperature.
- **Tinc tos.** I have a cough.
- **Tinc mal de coll.** I have a sore throat.
- **Estic marejat** / **marejada.** I feel dizzy.
- **Estic malalt** / **malalta.** I'm ill.

## In an emergency
The emergency number in Catalonia, and the whole EU, is **112** (said **u, u, dos**).
- **Necessito una ambulància.** I need an ambulance.
- **Hi ha hagut un accident.** There's been an accident.
- **Hi ha un home a terra.** There's a man on the ground.
- **No pot respirar.** He / she can't breathe.

## The operator asks
- **Què li passa?** What's wrong? (vostè)
- **On és?** Where are you? (vostè)
- **Quina és l'adreça?** What's the address?

## Task: role-play a call to the emergency services
Bon dia, necessito una ambulància. Hi ha un home a terra i no pot respirar. Som al carrer de Mallorca, número dotze.
`,
  exercises: [
    { id: 'ca-ara-076', english: 'My head hurts.', pattern: 'Em fa mal el cap.', alsoAccepted: ['{|Jo }tinc mal de cap.'] },
    { id: 'ca-ara-077', english: 'My feet hurt.', pattern: 'Em fan mal els peus.' },
    { id: 'ca-ara-078', english: 'I have a stomach ache.', pattern: '{|Jo }tinc mal de panxa.', alsoAccepted: ['Em fa mal la panxa.'] },
    { id: 'ca-ara-079', english: 'She has a temperature.', pattern: '{|Ella }té febre.' },
    { id: 'ca-ara-080', english: 'I have a cough and a sore throat.', pattern: '{|Jo }tinc tos i mal de coll.' },
    { id: 'ca-ara-081', english: 'His arm hurts a lot.', pattern: 'Li fa molt de mal el braç.', alsoAccepted: ['El braç li fa molt de mal.'] },
    { id: 'ca-ara-082', english: 'I feel dizzy.', pattern: '{|Jo }estic {marejat|marejada}.' },
    { id: 'ca-ara-083', english: 'My son is ill.', pattern: 'El meu fill està malalt.' },
    { id: 'ca-ara-084', english: 'I need an ambulance.', pattern: '{|Jo }necessito una ambulància.' },
    { id: 'ca-ara-085', english: "There's been an accident.", pattern: 'Hi ha hagut un accident.' },
    { id: 'ca-ara-086', english: "There's a man on the ground.", pattern: 'Hi ha un home a terra.' },
    { id: 'ca-ara-087', english: "He can't breathe.", pattern: '{|Ell }no pot respirar.' },
    { id: 'ca-ara-088', english: "What's wrong? (vostè)", pattern: 'Què li passa?' },
    { id: 'ca-ara-089', english: 'Where are you (vostè)?', pattern: 'On {és|està}{| vostè}?' },
    { id: 'ca-ara-090', english: "We're at number twelve, Mallorca Street.", pattern: '{Som|Estem} al carrer {de |}Mallorca, número dotze.' },
  ],
};

export default lesson;
