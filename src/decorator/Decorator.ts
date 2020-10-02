import { Notifier, MailNotifier  } from './Notifier'

export class BaseDecorator implements Notifier {
  private component: Notifier

  constructor(component: Notifier) {
    this.component = component
  }
  public send(message: string): void {
    this.component.send(message)
  }
}

export class SMSNotifier extends BaseDecorator {
  public send(message: string) {
    super.send(message)
    this.sendSMS(message)
  }
  private sendSMS(message: string) {
    console.log(`send SMS message: ${message}`)
  }
}

export class FacebookNotifier extends BaseDecorator {
  public send(message: string) {
    super.send(message)
    this.sendFacebookMessage(message)
  }

  private sendFacebookMessage(message: string) {
    console.log(`send Facebook message: ${message}`)
  } 
}

export class SlackNotifier extends BaseDecorator {
  public send(message: string) {
    super.send(message)
    this.sendSlackMessage(message)
  }

  private sendSlackMessage(message: string) {
    console.log(`send Slack message: ${message}`)
  } 
}
