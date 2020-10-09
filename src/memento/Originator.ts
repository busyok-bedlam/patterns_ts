import { ConcreteMemento, Memento } from './Memento'
export class Originator {
  private state: string
  constructor(state: string) {
    this.state = state
  }

  public save(): Memento {
    return new ConcreteMemento(this.state)
  }

  public doSomething(): void {
    this.state = this.generateRandomString(30);
  }

  private generateRandomString(length = 10): string {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return new Array(length).fill(null).map(() => charSet.charAt(Math.floor(Math.random() * charSet.length))).join('');
  }

  public restore(memento: Memento): void {
    this.state = memento.getState()
  }
}
