/**
@param req.body: is to get access to all different properties
@param const{}: is to access all the properties with desctructuring
@param const survey: lower case 'survey' indicate to instance of a survey

*/

const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, subject, body, recipients } = req.body;

        // using surveys mongoose model to create a new instance of survey, represent the survey to be send out to bunch of user inside of mongo database
        const survey = new Survey({
            title,
            subject,
            body
        });

    });
};