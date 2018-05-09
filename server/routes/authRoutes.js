const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);

        // cookies session is not inherently passing data to passport, it's
        //  just processing incoming request, populating that req.session
        //  property, and passport access the data that exist on req.session
        // res.send(req.session);
    });
};