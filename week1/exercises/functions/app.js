/**
 * Functions
 */

const displayStudentInfo = ({ firstName, lastName }) => `Jouw volledige naam is ${firstName} ${lastName}`;

const longestWords = (str) => str.split(' ').reduce((a, b) => a.length > b.length ? a : b);

const myFunction = (callback) => { callback(); }
const callback = () => { console.log('test'); }
myFunction(callback);

const convertStringToUppercases = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}