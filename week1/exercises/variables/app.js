/**
 * Destructuring 1
 */

/*const obj =  { one : 1, two : 2 }
var { one: anotherOne, two } = obj
console.log(anotherOne);*/

/**
 * Destructuring 2
 */

/*const obj =  { two : 2 }
var { one = 1, two } = obj
console.log(one) // outputs undefined*/

/**
 * Destructuring 3
 */

/*const obj =  { first: "James", last: "Baker", alias: "JB"  }
var { first = "John", last = "Doe", alias: nickname = "timdpaep" } = obj
console.log(nickname) // outputs nickname is not defined*/

/**
 * Destructuring 4
 */

/*let names = []

let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]

for({ name } of users) {
  names.push(name)
}

console.log(names) // should log ["John", "Jason", "Jeremy", "Jacob"]*/

/**
 * Destructuring 5
 */

/*let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]
const [,,{ name: thirdUser },] = users;
// let thirdUser = [users.filter((e, i) => i === 2 )[0].name]
console.log(thirdUser)  // "Jeremy"*/

/**
 * Destructuring 6
 */

let { name, email, ...rest } = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
console.log(rest); // outputs {city: "Phoenix", state: "AZ", country: "USA"}

/**
 * Destructuring 7
 */

const arr = [1, 2, 3, 4, 5, 6]
const [ a, b ] = arr;
console.log(a) // outputs 1
console.log(b) // outputs 2

/**
 * Destructuring 8
 */

const arr = ["cars", "planes", ["trains", ["motorcycles"]]];
let [ trans1, trans2, [trans3, [trans4]] ] = arr;

console.log(trans1) // outputs "cars"
console.log(trans2) // outputs "planes"
console.log(trans3) // outputs "trains"
console.log(trans4) // outputs "motorcycles"

/**
 * Destructuring 9
 */

const arr = ["eyes", "nose", "lips", "ears"]
let [,, lips,] = arr

/**
 * Destructuring 10
 */

var [head, ...tail] = [1, 2, 3, 4]
console.log(tail) // outputs 2