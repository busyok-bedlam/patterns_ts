import { RouteNavigator } from './navigator'
import { RoadStrategy, WalkingStrategy } from './strategy'


const navigator = new RouteNavigator();
const roadStrategy = new RoadStrategy();
navigator.setStrategy(roadStrategy)
console.log(navigator.buildRoute(10, 120))

const walkingStrategy = new WalkingStrategy()
navigator.setStrategy(walkingStrategy)
console.log(navigator.buildRoute(90, 120))
