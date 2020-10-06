import { Memento } from './Memento'
import { Originator } from './Originator'
export class Caretaker {
  private mementos: Memento[] = []
  private originator: Originator

  constructor(originator: Originator) {
    this.originator = originator
  }

  public backup(): void {
    this.mementos.push(this.originator.save())
  }

  public undo(): void {
    if(!this.mementos.length) {
      console.log('NO PREVIOUS STATE')
      return
    }
    const memento = this.mementos.pop()
    this.originator.restore(memento!)
  }

  public showHistory() {
    if(!this.mementos.length) {
      console.log('There is no operations in history')
      return
    }
    for (const memento of this.mementos) {
      console.log(memento.getName())
    }
  }
}
