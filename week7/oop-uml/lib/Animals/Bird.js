/**
 * The Bird Object Definition
 */

import Animal from '../Animal.js';

export default class Bird extends Animal {
  constructor(
    {
      hasFeathers=false,
      weight=1,
      length=1
    } = { }
  ) {
    super({
      weight,
      length
    })
    this.hasFeathers = hasFeathers;
  }

  fly() {
    return "I am flying!";
  }
}