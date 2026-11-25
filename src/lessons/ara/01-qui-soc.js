const lesson = {
  id: 'ca-ara-lesson-01',
  icon: '👋',
  title: 'Qui soc? Who am I?',
  level: 'A1',
  category: 'Saying hello',
  explanation: `
Greet people and introduce yourself: your name, where you're from, where you live, what you do and which languages you speak.

## Greetings
- **Hola**: hello
- **Bon dia**: good morning
- **Bona tarda**: good afternoon, good evening
- **Bona nit**: good night
- **Adéu**: goodbye
- **Fins aviat** / **Fins demà**: see you soon / see you tomorrow
- **Encantat** / **Encantada** or **Molt de gust**: nice to meet you
- **Com estàs?** **Molt bé, gràcies. I tu?** How are you? Very well, thanks. And you?

## Ser: to be
| jo          soc
| tu          ets
| ell/ella    és
| nosaltres   som
| vosaltres   sou
| ells/elles  són
Since the 2017 spelling reform, **soc** has no accent. Older books write **sóc**, and that's accepted here too.

## Dir-se (to be called) and viure (to live)
|             dir-se      viure
| jo          em dic      visc
| tu          et dius     vius
| ell/ella    es diu      viu
| nosaltres   ens diem    vivim
| vosaltres   us dieu     viviu
| ells/elles  es diuen    viuen

## Tu and vostè
**Tu** is informal. **Vostè** is the polite "you", and it takes the ell/ella form of the verb:
- **Com et dius?** What's your name? (tu)
- **Com es diu?** What's your name? (vostè)

## Introducing yourself
- **Com et dius?** **Em dic** Anna.
- **D'on ets?** **Soc de** Manchester.
- **On vius?** **Visc a** Barcelona.
- **A què et dediques?** **Soc** infermera.
- **Quines llengües parles?** **Parlo** anglès i una mica de català.
- **Quants anys tens?** **Tinc** trenta-dos anys.

## Nationalities and jobs
Most add **-a** for the feminine. **-ès** becomes **-esa**, and a stressed final vowel adds **-na**:
|               masc.        fem.
| English       anglès       anglesa
| French        francès      francesa
| Chinese       xinès        xinesa
| Italian       italià       italiana
| Moroccan      marroquí     marroquina
| German        alemany      alemanya
| teacher       professor    professora
| nurse         infermer     infermera
There's no article before a job: **Soc metge.** I'm a doctor.

## Introducing someone else
Before a name, Catalan often uses **en** (men) or **la** (women): **Aquest és el meu amic en Jordi.** **Aquesta és la Marta.**

## Task: greet and introduce yourself
Bon dia! Em dic Anna. Soc anglesa, de Manchester, i visc a Barcelona. Soc infermera. Parlo anglès i una mica de català. Encantada!
`,
  exercises: [
    { id: 'ca-ara-001', english: 'Good morning, my name is Anna.', pattern: 'Bon dia, em dic Anna.' },
    { id: 'ca-ara-002', english: "What's your (tu) name?", pattern: 'Com et dius{| tu}?', alsoAccepted: ['Tu com et dius?'] },
    { id: 'ca-ara-003', english: "What's your (vostè) name?", pattern: 'Com es diu{| vostè}?', alsoAccepted: ['Vostè com es diu?'] },
    { id: 'ca-ara-004', english: "I'm from Manchester.", pattern: '{|Jo }{soc|sóc} de Manchester.' },
    { id: 'ca-ara-005', english: 'Where are you (tu) from?', pattern: "D'on ets{| tu}?", alsoAccepted: ["Tu d'on ets?"] },
    { id: 'ca-ara-006', english: "She's Moroccan and he's Chinese.", pattern: 'Ella és marroquina i ell és xinès.' },
    { id: 'ca-ara-007', english: 'I live in Barcelona.', pattern: '{|Jo }visc a Barcelona.' },
    { id: 'ca-ara-008', english: 'Where do you (tu) live?', pattern: 'On vius{| tu}?', alsoAccepted: ['Tu on vius?'] },
    { id: 'ca-ara-009', english: "I'm a nurse.", pattern: '{|Jo }{soc|sóc} {infermera|infermer}.' },
    { id: 'ca-ara-010', english: 'What do you (tu) do for a living?', pattern: '{A què et dediques|De què treballes}?' },
    { id: 'ca-ara-011', english: 'I speak English and a bit of Catalan.', pattern: '{|Jo }parlo anglès i una mica de català.' },
    { id: 'ca-ara-012', english: "I'm thirty-two years old.", pattern: '{|Jo }tinc trenta-dos anys.' },
    { id: 'ca-ara-013', english: 'This is my friend Jordi.', pattern: 'Aquest és el meu amic{| en} Jordi.' },
    { id: 'ca-ara-014', english: 'Nice to meet you.', pattern: '{Encantat|Encantada|Molt de gust}.' },
    { id: 'ca-ara-015', english: 'Bye, see you tomorrow!', pattern: 'Adéu, fins demà!', alsoAccepted: ['Fins demà, adéu!'] },
  ],
};

export default lesson;
