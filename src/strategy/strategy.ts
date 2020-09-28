export interface RouteStrategy {
  buildRoute(a: number, b: number): string
}

export class RoadStrategy implements RouteStrategy {
  buildRoute(a: number, b: number): string {
    return `you have to move ${b - a}km by road`
  }
}

export class WalkingStrategy implements RouteStrategy {
  buildRoute(a: number, b: number): string {
    return `you have to move ${b - a}km walking`
  }
}

export class PublicTransportStrategy implements RouteStrategy {
  buildRoute(a: number, b: number): string {
    return `you have to move ${b - a}km walking`
  }
}
