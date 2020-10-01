/**
 * 1. Join Elements
 */

const myColor = ["Red", "Green", "White", "Black"];
const joinElements = (arr, char=',') => arr.reduce((prev, current) => prev += char + current);
console.log(joinElements(myColor, '+'));

/**
 * 2. Unique Values
 */

const duplicates = [ 1, 2, 3, 1, 2 ];

const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates(duplicates));

/**
 * 3. Swap Case
 */

const swapCase = (s) => {
  return s.split('')
          .map((c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
          .join('');
}
console.log(swapCase('JavaScript gives us four methods'));

/**
 * 4. Sort Objects Title
 */

var library = [
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

const sortObjectsTitle = (objects) => objects.sort((a, b) => (a.title > b.title ? 1 : ((b.title > a.title) ? -1 : 0)))
console.log(sortObjectsTitle(library))

/**
 * 5. Union Array
 */

const union1 = [ 1, 2, 3];
const union2 = [ 12, 1, 2, 100];

const unionArray = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

console.log(unionArray(union1, union2));


/**
 * 6. Most Frequent Item
 */

const arr1= [ 1, 3, "r", "rrrr", "A", "B", 1, 2, 3, 4, 3 ];

const mostFrequentItem = (arr) => {
  // sort the array first
  const sortedArray = arr.sort();
  // get unique values with set
  const uniqueValues = [...new Set(arr)];
  // count the values via a for loop
  const countedValues = [];
  for(const value of uniqueValues) {
    countedValues.push({
      value,
      totalOcc: (sortedArray.lastIndexOf(value) - sortedArray.indexOf(value)) + 1
    });
  }
  // sort asc and shift first value
  return countedValues.sort((a,b) => b.totalOcc-a.totalOcc).shift().value;
}
console.log(mostFrequentItem(arr1));




