/**
 * The GoldFish Object Definition
 */

import Fish from '../Fish.js';

export default class GoldFish extends Fish {
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
    this.hasScales = true;
  }

  swim() {
    return "I am swiming as a GoldFish!";
  }
}