import 'reflect-metadata'
import { CarBuilder } from './builder'
import { Director } from './director'
import { Order, CarTypes, CorpusType, Engines } from './Car'

const clientCode = (director: Director) => {
  const builder = new CarBuilder()
  director.setBuilder(builder)
  const order: Order = {
    carType: CarTypes.TRUCK,
    color: 'GREY',
    corpus: CorpusType.METAL,
    engine: Engines.BMW
  }

  director.make(order)
  builder.getProduct().describeParts()
}

const director = new Director();
clientCode(director)
