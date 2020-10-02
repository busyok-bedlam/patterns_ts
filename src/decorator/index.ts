import { SMSNotifier, FacebookNotifier, SlackNotifier } from './Decorator'
import { MailNotifier } from './Notifier'

const mailNotifier = new MailNotifier()
const withSMS = new SMSNotifier(mailNotifier)
const withFacebook = new FacebookNotifier(withSMS)
const withSlack = new SlackNotifier(withFacebook)
withSlack.send('SPECIAL MESSAGE');

