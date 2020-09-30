/**
 * Our average application
 * Complete this exercise by fixing the TODO's!
 */

// TODO: import the studentScores
// TODO: import the averageOfArray function
// TODO: import the randomStudentFromArray function
// TODO: import the print function

// get a random student
const { name, scores } = randomStudentFromArray(studentScores);

// print that student
print(name, averageOfArray(scores))