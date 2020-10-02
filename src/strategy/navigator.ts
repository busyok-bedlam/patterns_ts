import { RouteStrategy } from './strategy'

export interface Navigator {
  setStrategy(strategy: RouteStrategy): void
  buildRoute(a: number, b: number): string
}

export class RouteNavigator implements Navigator {
  private strategy!: RouteStrategy

  setStrategy(strategy: RouteStrategy): void {
    this.strategy = strategy
  }

  buildRoute(a: number, b: number): string {
    return this.strategy.buildRoute(a, b)
  }
}
