export interface Notifier {
  send(message: string): void
}

export class MailNotifier implements Notifier {
  send(message: string) {
    console.log(`send email message: ${message}`)
  }
}
