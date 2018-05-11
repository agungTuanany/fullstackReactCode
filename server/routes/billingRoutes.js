const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credit',
            source: req.body.id
        });
        //update user Model
        // the user in 'req.user' and 'const user' is represent the same user in separate object in memory
        // whenever we save the user model by convention we make reference to the copy of the model / copy of the user we just get back from Document(database)
        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
};