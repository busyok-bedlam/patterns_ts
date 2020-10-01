export enum CorpusType {
  METAL = 'METAL',
  GOLD = 'GOLD',
  PLASTIC = 'PLASTIC'
}

export enum WheelsType {
  BIG = 'BIG',
  NORMAL = 'NORMAL',
  SMALL = 'SMALL'
}

export enum Engines {
  BMW = 'BMW',
  HONDA = 'HONDA',
  FERRARY = 'FERRARY',
  FORD = 'FORD',
  NISSAN = 'NISSAN',
  TOYOTA = 'TOYOTA'
}

export enum CarTypes {
  SPORT = 'SPORT',
  TRUCK = 'TRUCK',
  PASSENGER = 'PASSENGER',
  TOY_CAR = 'TOY_CAR'
}

export interface CarInterface {
  seats: number
  engine: Engines
  corpus: CorpusType
  wheels: WheelsType
  trailer: boolean
  amortization: boolean
  carType: CarTypes
  color: string
}

export interface Order {
  carType: CarTypes
  color: string
  corpus: CorpusType
  engine: Engines
}

export type OrderToPerform = Omit<Order, "carType">

export class Car {
  public result: CarInterface = <CarInterface>{}
  public describeParts(): void {
    console.log(`This car is ${this.result.carType}`)
    console.log(`HAS ${this.result.seats} seats`)
    console.log(`HAS ${this.result.engine} engine`)
    console.log(`HAS ${this.result.corpus} corpus`)
    console.log(`HAS ${this.result.wheels} wheels`)
    this.result.trailer && console.log(`has trailer`)
    this.result.amortization && console.log(`has amortization`)
    console.log(`IS ${this.result.color}`)
  }
}
