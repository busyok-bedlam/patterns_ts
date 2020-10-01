import { Car, CarInterface, CorpusType, CarTypes, WheelsType, Engines } from './Car'

export interface Builder {
  setCarType(carType: CarTypes): void
  setEngine(engine: Engines): void
  setCorpus(corpusType: string): void
  setSeats(seatsCount: number): void
  setAmortization(): void
  setTrailer(): void
  setWheels(wheelsType: WheelsType): void
  setColor(color: string): void
}

export class CarBuilder implements Builder {
  private product!: Car

  constructor() {
    this.reset()
  }
  public reset() {
    this.product = new Car()
  }

  public setEngine(engine: Engines): void {
    this.product.result.engine = engine
  }

  public setCorpus(corpusType: CorpusType): void {
    this.product.result.corpus = corpusType
  }

  public setSeats(seatsCount: number): void {
    this.product.result.seats = seatsCount
  }

  public setAmortization(): void {
    this.product.result.amortization = true
  }

  public setCarType(carType: CarTypes): void {
    this.product.result.carType = carType
  }

  public setColor(color: string): void {
    this.product.result.color = color
  }

  public setTrailer(): void {
    this.product.result.trailer = true
  }

  public setWheels(wheelsType: WheelsType): void {
    this.product.result.wheels = wheelsType
  }

  public getProduct(): Car {
    const result = this.product
    this.reset()
    return result
  }

}
