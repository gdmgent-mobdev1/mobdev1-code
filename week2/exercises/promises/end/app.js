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

const delayedUpperCase = param => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      (typeof param === 'string') ? resolve(param.toUpperCase()) : reject(`Parameter not correct: ${param}`);
    }, 500);
  });
};

/**
 * 2. async/await
 */

// Create an async function that will wait until the delayedUpperCase from exercise 1 is done
// The async paramater takes the argument that we will pass in delayedUpperCase
// Don't forget to do error handling!

const asyncDelayedUpperCase = async (param) => {
  try { return await delayedUpperCase(param); }
  catch(e) { console.error(e); }
}

asyncDelayedUpperCase("a test").then(data => console.log(data));

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

const makeOrder = () => new Promise((resolve) => setTimeout(resolve, 1000));
const gettingOrder = () => new Promise((resolve) => setTimeout(resolve, 4000));
const bringingOrder = () => new Promise((resolve) => setTimeout(resolve, 2000));
const eatingMeal = () => new Promise((resolve) => setTimeout(resolve, 3000));

/* console.log("making order")
makeOrder()
  .then(() => {
    console.log("getting order");
    return gettingOrder();
  })
  .then(() => {
    console.log("bringing order");
    return bringingOrder();
  })
  .then(() => {
    console.log("eating order");
    return eatingMeal();
  })
  .then(() => {
    console.log("done");
  }); */

const deliveroo = async () => {
  console.log("making order")
  await makeOrder();
  console.log("getting order");
  await gettingOrder();
  console.log("bringing order");
  await bringingOrder();
  console.log("eating order");
  await eatingMeal();
  console.log("done");
}

deliveroo();