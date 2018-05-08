require('./services/passport');

const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongooseURI);
const app = express();
require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Started up at port ${PORT}`);
});
