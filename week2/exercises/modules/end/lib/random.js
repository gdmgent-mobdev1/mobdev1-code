/**
 * Get random student
 */

const randomStudentFromArray = (studentArray) => studentArray[Math.floor(Math.random() * studentArray.length)];

export { randomStudentFromArray };