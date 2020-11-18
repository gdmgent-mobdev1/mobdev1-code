/**
 * The Fish Object Definition
 */

import Animal from '../Animal.js';

export default class Fish extends Animal {
  constructor(
    {
      hasScales=false,
      weight=1,
      length=1
    } = { }
  ) {
    super({
      weight,
      length
    })
    this.hasScales = hasScales;
  }

  swim() {
    return "I am swiming!";
  }
}