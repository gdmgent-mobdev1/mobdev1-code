/**
 * Our average application
 */

import { studentScores } from './data/studentScores.js';
import { averageOfArray } from './lib/averages.js';
import { randomStudentFromArray } from './lib/random.js';
import print from './lib/print.js' ;

// get a random student
const { name, scores } = randomStudentFromArray(studentScores);

// print that student
print(name, averageOfArray(scores))