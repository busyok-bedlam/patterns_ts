import { Result } from './result'

export interface Builder {
  reset(): void
  setEngine(engine: string): void
  setCorpus(corpusType: string): void
  setSeats(seatsCount: number): void
  getResult(): void
}

export interface CarBuilderInterface extends Builder {
  getResult(): Result
}
export class CarBuilder implements CarBuilderInterface {
  private result: Result
  constructor() {
    this.result = {} as Result
  }

  reset() {
    this.result = {} as Result
  }

  setEngine(engine: string): void {
    this.result.engine = engine
  }

  setCorpus(corpusType: string): void {
    this.result.corpus = corpusType
  }

  setSeats(seatsCount: number): void {
    this.result.seats = seatsCount
  }

  getResult(): Result {
    return this.result
  }

}

//export class BoatBuilder implements Builder {
  //private result: Result
  //constructor() {
    //this.result = {} as Result
  //}

  //reset() {
    //this.result = {} as Result
  //}

  //setEngine(engine: string): void {
    //this.result.engine = engine
  //}
  //setCorpus(corpusType: string): void {
    //this.result.corpus = corpusType;
  //}

  //setSeats(seatsCount: number): void {
    //this.result.seats = seatsCount
  //}

  //getResult(): Result {
    //return this.result
  //}

//}
