// Lessons in display order. To add a lesson, create a file next to this one with the same
// shape and add it to this list.
//
// Lesson shape:
//   id, icon, title (Catalan), subtitle (Spanish)
//   notes:     [{ title, rows: [[catalan, spanish], ...], tip? }]   shown before the exercises
//   exercises: one of
//     { type: 'translate', prompt: <Spanish>, answers: [<Catalan>, ...] }    first answer is shown as the correction
//     { type: 'select', prompt, hint?, options: [...], answer }              "___" in prompt marks the blank
//     { type: 'listen', text: <Catalan>, answers?: [<also accepted>], audioSrc?: 'audio/file.mp3' }

import salutacions from './01-salutacions';
import numeros from './02-numeros';
import familia from './03-familia';
import casa from './04-casa';

const lessons = [salutacions, numeros, familia, casa];

export default lessons;
