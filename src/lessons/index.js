// The home screen's sections, each a list of lessons in teaching order. Section 1 is copied from
// BarceLang's CatalanA1Lessons.kt. Section 2, in ara/, follows the nine units of the CPNL's A1 course
// "ARA. Català per començar", one lesson per unit, ending with that unit's task. Section 3, in verbs/,
// has one lesson per verb for the 20 most common verbs, present tense only. A section with
// `ownPage` is shown on the home screen as a single card that opens a page listing its lessons.
// To add a lesson, create a file with the same shape and add it to its section's list.
//
// Lesson shape:
//   id           what saved progress refers to: never change or reuse one
//   icon, title, level, category
//   explanation  Markdown shown at the top of the lesson: "## " headings, "- " bullets, **bold**,
//                and "| " lines for tables, which are shown in a monospaced font as written
//   exercises    [{ id, english, pattern, alsoAccepted? }]
//                `pattern` is the Catalan sentence, with {a|b} marking interchangeable wording.
//                The first option of each group forms the model answer: "{|Jo }sóc" shows "Sóc"
//                but also accepts "Jo sóc". `alsoAccepted` lists rewordings groups can't express.
//                See src/utils/answers.js.

import { prepareExercise } from '../utils/answers';
import greetings from './01-greetings-and-introductions';
import serAndEstar from './02-ser-and-estar';
import articles from './03-articles-and-gender';
import plurals from './04-plurals-and-adjectives';
import tenir from './05-tenir-and-hi-ha';
import rooms from './06-rooms-and-furniture';
import position from './07-where-things-are-and-ordinal-numbers';
import arVerbs from './08-present-tense-ar-verbs';
import otherVerbs from './09-present-tense-other-verbs';
import irregularVerbs from './10-anar-fer-voler-and-poder';
import street from './11-your-street-and-local-services';
import directions from './12-asking-for-and-giving-directions';
import numbers from './13-numbers-days-and-the-time';
import questions from './14-asking-questions';
import family from './15-family-and-possessives';
import agradar from './16-agradar-and-negatives';
import quiSoc from './ara/01-qui-soc';
import laCasa from './ara/02-la-casa';
import elMeuCarrer from './ara/03-el-meu-carrer';
import queHiFem from './ara/04-que-hi-fem-aqui';
import laNevera from './ara/05-que-hi-ha-a-la-nevera';
import elCos from './ara/06-el-cos';
import lAjuntament from './ara/07-on-es-lajuntament';
import cadaDia from './ara/08-cada-dia';
import queNecessito from './ara/09-que-necessito';
import ser from './verbs/01-ser';
import haver from './verbs/02-haver';
import estar from './verbs/03-estar';
import tenirVerb from './verbs/04-tenir';
import fer from './verbs/05-fer';
import poder from './verbs/06-poder';
import dir from './verbs/07-dir';
import anar from './verbs/08-anar';
import veure from './verbs/09-veure';
import donar from './verbs/10-donar';
import saber from './verbs/11-saber';
import voler from './verbs/12-voler';
import venir from './verbs/13-venir';
import posar from './verbs/14-posar';
import passar from './verbs/15-passar';
import sortir from './verbs/16-sortir';
import quedar from './verbs/17-quedar';
import parlar from './verbs/18-parlar';
import portar from './verbs/19-portar';
import trobar from './verbs/20-trobar';

const prepare = (lesson) => ({ ...lesson, exercises: lesson.exercises.map(prepareExercise) });

export const sections = [
  {
    id: 'essentials',
    title: 'Section 1: Essentials',
    description: 'Grammar step by step, from greetings to everyday verbs',
    lessons: [
      greetings,
      serAndEstar,
      articles,
      plurals,
      tenir,
      rooms,
      position,
      arVerbs,
      otherVerbs,
      irregularVerbs,
      street,
      directions,
      numbers,
      questions,
      family,
      agradar,
    ],
  },
  {
    id: 'ara',
    title: 'Section 2: Everyday situations',
    description: 'Following the units of “ARA. Català per començar”, the CPNL’s A1 course, each ending with its task',
    lessons: [quiSoc, laCasa, elMeuCarrer, queHiFem, laNevera, elCos, lAjuntament, cadaDia, queNecessito],
  },
  {
    id: 'verbs',
    title: 'Section 3: The 20 most common verbs',
    description: 'One verb per lesson, roughly from most to least common, in the present tense and in everyday sentences',
    icon: '🔤',
    ownPage: true,
    lessons: [
      ser, haver, estar, tenirVerb, fer, poder, dir, anar, veure, donar, saber, voler, venir, posar, passar, sortir, quedar, parlar, portar, trobar,
    ],
  },
].map((section) => ({ ...section, lessons: section.lessons.map(prepare) }));

// Every lesson, across sections.
const lessons = sections.flatMap((section) => section.lessons);

export const sectionOf = (lessonId) => sections.find((section) => section.lessons.some((l) => l.id === lessonId));

export default lessons;
