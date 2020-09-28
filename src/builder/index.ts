import "reflect-metadata";
import { container } from "tsyringe";

import { CarBuilder } from './builder'
import { Director } from './director'

container.register("Builder", CarBuilder)
const director = container.resolve(Director)
const result = director.make({
  engine: 'V8',
  seats: 5,
  corpus: 'titan'
});
console.log(result)
