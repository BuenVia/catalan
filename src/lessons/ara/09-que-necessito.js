const lesson = {
  id: 'ca-ara-lesson-09',
  icon: '🗺️',
  title: 'Què necessito? What do I need?',
  level: 'A1',
  category: 'Out in the city',
  explanation: `
Say what you need, ask where to buy things and what they cost, and describe places in the city from photos.

## Needing something
- **Necessito** un bitllet. I need a ticket.
- **Necessito comprar** segells. I need to buy stamps.
- **Cal** + infinitive or noun means "it's necessary", for anyone: **Cal agafar el metro.** You need to take the metro. **No cal cotxe.** You don't need a car.
- **Necessites alguna cosa?** Do you need anything? (tu)

## Where to buy it
- **On puc comprar** segells? Where can I buy stamps?
- **a l'estanc**: at the tobacconist's (stamps, bus tickets)
- **a la farmàcia**: at the pharmacy, **al mercat**: at the market
- **la botiga de roba**: clothes shop
- **Els pots comprar a l'estanc.** You can buy them at the tobacconist's. **Els** stands for a masculine plural noun, **les** for a feminine one.

## Prices
- **Quant costa?** or **Quant val?** How much is it?
- **Quant costen?** How much are they?
- **Costa vint-i-cinc euros.** It costs twenty-five euros.

## Numbers from 20
| 20  vint          21  vint-i-un      25  vint-i-cinc
| 30  trenta        31  trenta-un      40  quaranta
| 50  cinquanta     60  seixanta       70  setanta
| 80  vuitanta      90  noranta        100 cent

## Describing a photo
- **En aquesta foto hi ha** un mercat. In this photo there's a market.
- **Això és** la catedral. This is the cathedral.
- **Aquell edifici és** l'ajuntament. That building is the town hall.
- **el museu**: museum, **la catedral**: cathedral, **el port**: harbour, **l'edifici**: building

## Getting around
- **el metro**, **l'autobús** or **el bus**, **el tren**, **la bicicleta**
- **Per anar a** la platja, **cal agafar** el metro. To get to the beach, you need to take the metro.
- **És a deu minuts a peu.** It's ten minutes' walk.

## Task: explain information about the city from photos (a treasure hunt)
En aquesta foto hi ha un mercat. Hi venen fruita i verdura. Per anar-hi, cal agafar el metro. És a deu minuts a peu de la plaça.
`,
  exercises: [
    { id: 'ca-ara-121', english: 'What do I need?', pattern: 'Què necessito?' },
    { id: 'ca-ara-122', english: 'I need to buy a bus ticket.', pattern: "{|Jo }necessito comprar un bitllet {d'autobús|de bus}." },
    { id: 'ca-ara-123', english: 'Where can I buy stamps?', pattern: 'On puc comprar segells?' },
    { id: 'ca-ara-124', english: "You (tu) can buy them at the tobacconist's.", pattern: "Els pots comprar a l'estanc.", alsoAccepted: ["Pots comprar-los a l'estanc."] },
    { id: 'ca-ara-125', english: 'How much is this jacket?', pattern: 'Quant {costa|val} aquesta jaqueta?' },
    { id: 'ca-ara-126', english: 'It costs twenty-five euros.', pattern: '{Costa|Val} vint-i-cinc euros.' },
    { id: 'ca-ara-127', english: 'Do you (tu) need anything?', pattern: 'Necessites alguna cosa?', alsoAccepted: ['Et cal alguna cosa?', 'Tu necessites alguna cosa?'] },
    { id: 'ca-ara-128', english: "In this photo there's a market.", pattern: 'En aquesta foto hi ha un mercat.', alsoAccepted: ['Hi ha un mercat en aquesta foto.'] },
    { id: 'ca-ara-129', english: 'This is the cathedral.', pattern: '{Això|Aquesta} és la catedral.' },
    { id: 'ca-ara-130', english: 'That building is the town hall.', pattern: "Aquell edifici és l'ajuntament." },
    { id: 'ca-ara-131', english: 'To get to the beach, you need to take the metro.', pattern: "Per anar a la platja, cal agafar el metro.", alsoAccepted: ["Per anar a la platja, {has|s'ha} d'agafar el metro."] },
    { id: 'ca-ara-132', english: 'The museum is free on Sundays.', pattern: 'El museu és {gratuït|gratis} {els diumenges|el diumenge}.' },
    { id: 'ca-ara-133', english: 'They sell medicines at the pharmacy.', pattern: 'A la farmàcia venen medicaments.', alsoAccepted: ['Venen medicaments a la farmàcia.'] },
    { id: 'ca-ara-134', english: "You don't need a car in the city.", pattern: 'A la ciutat no cal cotxe.', alsoAccepted: ['No cal cotxe a la ciutat.'] },
    { id: 'ca-ara-135', english: "It's ten minutes' walk.", pattern: '{És|Està} a deu minuts {a peu|caminant}.' },
  ],
};

export default lesson;
