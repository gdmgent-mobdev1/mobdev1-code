/**
 * Functions that will calculate the average
 */

const averageOfArray = (scores) => {
  return (scores.reduce((total, currentValue) => total += currentValue)) / scores.length;
}

export { averageOfArray }