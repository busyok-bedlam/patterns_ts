import {injectable, inject} from "tsyringe"
import { OrderDetails } from './OrderDetails'
import { Builder, CarBuilder } from './builder'
import { Result } from './result'
import { CarTypes } from './CarTypes'



@injectable()
export class Director {
  private builder
  private carTypeMapping: {
    [key in CarTypes]: (requirements: OrderDetails) => void
  }
  constructor(builder: Builder) {
    this.builder = builder
    this.carTypeMapping = {
      [CarTypes.SPORT]: this.createSportCar,
      [CarTypes.CIVIL]: this.createCivilCar,
      [CarTypes.MILITARY]: this.createMilitaryCar
    }
  }

  setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  createSportCar() {

  }

  createCivilCar() {

  }

  createMilitaryCar() {

  }

  make(product: Result) {
    this.builder.setCorpus(product.corpus)
    this.builder.setEngine(product.engine)
    this.builder.setSeats(product.seats)
    return this.builder.getResult()
  }

}
