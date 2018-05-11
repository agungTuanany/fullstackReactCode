const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;