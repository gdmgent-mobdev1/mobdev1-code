/**
 * The Wale Object Definition
 */

import Fish from '../Fish.js';

export default class Wale extends Fish {
  constructor(
    {
      weight=1,
      length=1
    } = { }
  ) {
    super({
      weight,
      length
    })
    this.hasScales = false;
  }

  swim() {
    return "I am swiming as a Wale!";
  }
}