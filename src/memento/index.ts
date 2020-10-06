import { Originator } from './Originator'
import { Caretaker } from './Caretaker'

const originator = new Originator('FIRST STATE')
const caretaker = new Caretaker(originator)

originator.doSomething()
caretaker.backup()
originator.doSomething()
caretaker.backup()
originator.doSomething()
caretaker.backup()
caretaker.showHistory()
