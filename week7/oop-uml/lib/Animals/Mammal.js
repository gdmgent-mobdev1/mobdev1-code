/**
 * The Mammal Object Definition
 */

import Animal from '../Animal.js';

export default class Mammal extends Animal {
  constructor(
    {
      hasPows=false,
      weight=1,
      length=1
    } = { }
  ) {
    super({
      weight,
      length
    })
    this.hasPows = hasPows;
  }

  walk() {
    return "I am walking!";
  }
}