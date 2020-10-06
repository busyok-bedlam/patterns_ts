export interface Memento {
  getName(): string
  getState(): string
  getDate(): string
}

export class ConcreteMemento implements Memento {
  private readonly date
  private readonly state

  constructor(state: string) {
    this.state = state
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ')
  }

  public getState(): string {
    return this.state
  }

  public getName(): string {
    return `${this.getDate()}/ (${this.state})`
  }
  
  public getDate(): string {
    return this.date
  }
}
