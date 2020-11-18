/**
 * The Location Object Definition
 */

import Fish from './Animals/Fish.js'
import Mammal from './Animals/Mammal.js'
import Bird from './Animals/Bird.js'
import Animal from './Animal.js';

class Zoo {
  constructor() {
    this.animals = [];
  }

  registerAnimal(animal) {
    if(!(animal instanceof Animal)) return;
    this.animals.push(animal)
  }

  countFish() {
    return this.animals.reduce(
      (total=0, currentAnimal) => currentAnimal instanceof Fish ? total + 1 : total,
      0
    );
  }

  countMammels() {
    return this.animals.reduce(
      (total=0, currentAnimal) => currentAnimal instanceof Mammal ? total + 1 : total,
      0
    );
  }

  countBirds() {
    return this.animals.reduce(
      (total=0, currentAnimal) => currentAnimal instanceof Bird ? total + 1 : total,
      0
    );
  }
}

export default Zoo;