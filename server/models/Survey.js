const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients:[RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    // define which survey belong to which user
    // by convention using '_' of '_user' is telling this is suppose to be a relationship fields or reference field
    _user:{ type: Schema.Types.ObjectId, ref: 'user' },
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);
