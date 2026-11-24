// Lessons in teaching order, copied from BarceLang's CatalanA1Lessons.kt. To add a lesson, create a
// file next to this one with the same shape and add it to this list.
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

const lessons = [
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
].map((lesson) => ({ ...lesson, exercises: lesson.exercises.map(prepareExercise) }));

export default lessons;
