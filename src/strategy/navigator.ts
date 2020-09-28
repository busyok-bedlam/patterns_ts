import { RouteStrategy } from './strategy'

export interface Navigator {
  setStrategy(strategy: RouteStrategy): void
  buildRoute(a: number, b: number): string
}

export class RouteNavigator implements Navigator {
  private strategy: RouteStrategy | null

  constructor() {
    this.strategy = null
  }

  setStrategy(strategy: RouteStrategy): void {
    this.strategy = strategy
  }

  buildRoute(a: number, b: number): string {
    if(this.strategy) {
      return this.strategy.buildRoute(a, b)
    } else {
      throw new Error('You have to set route strategy')
    }
  }
}
