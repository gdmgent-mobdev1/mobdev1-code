/**
 * The Animal Object Definition
 */

import Location from './Location.js';

class Animal {
  constructor({ weight=0, length=0, location=new Location() } = { }) {
    this.weight = weight;
    this.length = length;
    this.location = location;
  }

  makeNoise() {
    return "I make some noise";
  }
}

export default Animal;