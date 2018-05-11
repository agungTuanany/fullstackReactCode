/**
@param this,formatAdresses(): this keyword belong to helper function

@param recipients from @param constructor({ subject, recipients }, content) is the recpients property from our survey instance

@param this.addContent(): is a built in functionality from 'helper.Mail' in other word is a method from sendgrid module.
*/
const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({ subject, recipients }, content) {
        super();//es2015 classes

        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body);
        // enabling click tracking
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses (recipients) {
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        });
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

};

module.exports = Mailer;