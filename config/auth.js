const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy
    , models = require('../app/models')
    , bcrypt = require('bcrypt');

// Set Up Local Starategy.
module.exports = function () {
    passport.use(new LocalStrategy(
        (username, password, done) => {

            models.User.findOne({where: {email: username}})
                .then(user => {

                    if (!user) {
                        return done(null, false, {message: 'Invalid username or password.'});
                    }

                    bcrypt.compare(password, user.password, (err, res) => {

                        if (!res) {
                            return done(null, false, {message: 'Invalid username or password.'});
                        }

                        return done(null, user);
                    });
                })
                .catch(error => {
                    return done(error);
                });
        }
    ));


    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
};