const lesson = {
  id: 'ca-ara-lesson-02',
  icon: '🏠',
  title: 'La casa. The home',
  level: 'A1',
  category: 'Home',
  explanation: `
Describe a home from the inside, and say who lives there.

## Types of home
- **el pis**: flat
- **la casa**: house
- **l'àtic**: penthouse, top-floor flat
- **la planta** or **el pis**: floor, storey. **Visc al tercer pis.** I live on the third floor.

## Rooms
- **el rebedor**: entrance hall
- **el passadís**: corridor
- **la sala d'estar**: living room
- **el menjador**: dining room
- **la cuina**: kitchen
- **l'habitació**: bedroom, room
- **el bany** or **el lavabo**: bathroom
- **el balcó**, **la terrassa**: balcony, terrace

## Furniture and appliances
- **el llit**: bed, **l'armari**: wardrobe, cupboard
- **la taula**: table, **la cadira**: chair, **el sofà**: sofa
- **la nevera**: fridge, **la rentadora**: washing machine
- **la dutxa**: shower, **la banyera**: bath
- **la finestra**: window, **la porta**: door

## Describing it
**Tenir** says what a home has, and **hi ha** what's in it:
- **El pis té** tres habitacions. The flat has three bedrooms.
- **A la cuina hi ha** una taula. There's a table in the kitchen.
|               masc.        fem.
| big           gran         gran
| small         petit        petita
| bright        lluminós     lluminosa
| new           nou          nova
| old           vell         vella
| cheap         barat        barata
| expensive     car          cara

## Where it is in the home
- **a la dreta** / **a l'esquerra**: on the right / on the left
- **al fons (de)**: at the end (of)
- **al costat de**: next to
- **al** = a + el, **del** = de + el, **dels** = de + els

## Who lives there
**El meu**, **la meva**, **els meus**, **les meves** mean "my":
- **Visc amb el meu marit.** I live with my husband.
- **Visc amb la meva dona i els meus fills.** I live with my wife and my children.
- **Visc sol** / **sola.** I live alone.
- **el company** / **la companya de pis**: flatmate

## Task: describe a home inside and say who lives there
Visc en un pis amb el meu marit i els meus fills. El pis té tres habitacions i dos banys. La cuina és petita però molt lluminosa.
`,
  exercises: [
    { id: 'ca-ara-016', english: 'I live in a flat with my husband.', pattern: '{|Jo }visc {en|a} un pis amb el meu marit.' },
    { id: 'ca-ara-017', english: 'The flat has three bedrooms.', pattern: 'El pis té tres habitacions.' },
    { id: 'ca-ara-018', english: 'The kitchen is small but very bright.', pattern: 'La cuina és petita però molt lluminosa.' },
    { id: 'ca-ara-019', english: 'There are two bathrooms.', pattern: 'Hi ha dos {banys|lavabos}.' },
    { id: 'ca-ara-020', english: "There's a big sofa in the living room.", pattern: "A la sala d'estar hi ha un sofà gran.", alsoAccepted: ["Hi ha un sofà gran a la sala d'estar."] },
    { id: 'ca-ara-021', english: 'My bedroom is at the end of the corridor.', pattern: 'La meva habitació és al fons del passadís.' },
    { id: 'ca-ara-022', english: 'The bathroom is on the right.', pattern: '{El bany|El lavabo} és a {la dreta|mà dreta}.' },
    { id: 'ca-ara-023', english: 'Is there a balcony?', pattern: 'Hi ha {|un }balcó?' },
    { id: 'ca-ara-024', english: "There's no washing machine.", pattern: 'No hi ha {|cap }rentadora.' },
    { id: 'ca-ara-025', english: 'Who lives with you (tu)?', pattern: 'Qui viu amb tu?' },
    { id: 'ca-ara-026', english: 'I live alone.', pattern: '{|Jo }visc {sol|sola}.' },
    { id: 'ca-ara-027', english: "My children's bedroom is very big.", pattern: "L'habitació dels meus fills és molt gran." },
    { id: 'ca-ara-028', english: 'We live on the third floor.', pattern: '{|Nosaltres }vivim {al tercer pis|a la tercera planta}.' },
    { id: 'ca-ara-029', english: 'The fridge is next to the window.', pattern: 'La nevera és al costat de la finestra.' },
    { id: 'ca-ara-030', english: 'The flat is old but cheap.', pattern: 'El pis és {vell|antic} però barat.' },
  ],
};

export default lesson;
