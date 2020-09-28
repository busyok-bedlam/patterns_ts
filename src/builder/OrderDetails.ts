import { CarTypes } from './CarTypes'

export interface OrderDetails {
    carType: CarTypes,
    engine: string,
    seats: number
}
