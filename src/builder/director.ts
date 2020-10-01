import {injectable, inject} from "tsyringe"
import { Builder } from './builder'
import { CarTypes, CorpusType, Order, OrderToPerform, WheelsType, Engines } from './Car'

@injectable()
export class Director {
  private builder!: Builder
  private carTypeMapping: {
    [key in CarTypes]: (order: OrderToPerform) => void
  }

  constructor() {
    this.carTypeMapping = {
      [CarTypes.SPORT]: this.createSportCar,
      [CarTypes.PASSENGER]: this.createPassengerCar,
      [CarTypes.TRUCK]: this.createTruck,
      [CarTypes.TOY_CAR]: this.createToyCar
    }
  }

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  private createSportCar = (order: OrderToPerform) => {
    this.builder.setCarType(CarTypes.SPORT);
    this.builder.setEngine(order.engine)
    this.builder.setAmortization()
    this.builder.setSeats(2)
    this.builder.setColor(order.color)
    this.builder.setCorpus(order.corpus)
    this.builder.setWheels(WheelsType.NORMAL)
  }

  private createPassengerCar = (order: OrderToPerform) => {
    this.builder.setCarType(CarTypes.PASSENGER)
    this.builder.setEngine(order.engine)
    this.builder.setSeats(4)
    this.builder.setColor(order.color)
    this.builder.setCorpus(order.corpus)
    this.builder.setWheels(WheelsType.NORMAL)
  }

  private createTruck = (order: OrderToPerform) => {
    this.builder.setCarType(CarTypes.TRUCK)
    this.builder.setEngine(order.engine)
    this.builder.setTrailer()
    this.builder.setCorpus(order.corpus)
    this.builder.setWheels(WheelsType.BIG)
    this.builder.setColor(order.color)
    this.builder.setSeats(2)
  }

  private createToyCar = (order: OrderToPerform) => {
    this.builder.setCarType(CarTypes.TOY_CAR)
    this.builder.setCorpus(CorpusType.PLASTIC)
    this.builder.setWheels(WheelsType.SMALL)
    this.builder.setColor(order.color)
    this.builder.setSeats(4)
  }

  public make(order: Order) {
    this.carTypeMapping[order.carType](order)
  }

}
