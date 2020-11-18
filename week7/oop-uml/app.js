/**
 * My App
 */

import { GoldFish, Wale } from './lib/Animals/Fish/index.js';
import { Mammal, Bird } from './lib/Animals/index.js';
import Zoo from './lib/Zoo.js';

// create an instance of a zoo
const zoo = new Zoo();

// create some animals
const mammel = new Mammal();
const bird = new Bird();
const wale = new Wale();
const goldFish = new GoldFish();

// register two fish
zoo.registerAnimal(wale);
zoo.registerAnimal(goldFish);

// register one mammal
zoo.registerAnimal(mammel);

// register one bird
zoo.registerAnimal(bird);

console.log(`I have ${zoo.countMammels()} mammals!`);
console.log(`I have ${zoo.countBirds()} birds!`);
console.log(`I have ${zoo.countFish()} fish!`);