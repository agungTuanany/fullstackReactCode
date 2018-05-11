/**
@param this,formatAdresses(): this keyword belong to helper function same as
    sendgrid.mail().formatAddresses();
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
    }

};

module.exports = Mailer;