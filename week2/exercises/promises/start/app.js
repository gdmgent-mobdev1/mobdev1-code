/**
 * Promises
 */

/**
 * 1. delayedUpperCase
 */

// Make a function that takes in a single parameter
// and returns a new promise. using setTimeout,
// after 500 milliseconds, the promise will either
// resolve or reject. If the input is a string,
// the promise resolves with that same string
// uppercased. If the input is anything but a string
// it rejects with that same input
//
// call the function delayedUpperCase

/**
 * 2. async/await
 */

// Create an async function that will wait until the delayedUpperCase from exercise 1 is done
// The async paramater takes the argument that we will pass in delayedUpperCase
// Don't forget to do error handling!

/**
 * 3. Simulate Deliveroo
 */

// Simulate a deliveroo delivery
// 1: Making an order takes 1 second
// 2: Letting the Deliveroo deliverer getting your meal takes 4 seconds
// 3: Bringing it to you takes 2 seconds
// 4: Eating it takes 3 seconds

// Use setTimeout to simulate this delivery:
// - use chaining Promises with the then() syntax
// - try creating the Promises with the async/await function
// - use Promises.all to simulate all the promises at once