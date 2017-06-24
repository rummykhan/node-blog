const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const models = require('../app/models');
const bcrypt = require('bcrypt');

// Set Up Local Starategy.
module.exports = function () {
    passport.use(new LocalStrategy(
        (username, password, done) => {
            models.User.findOne({where: {email: username}})
                .then(user => {

                    bcrypt.compare(password, user.password, (err, res) => {

                        if (!res) {
                            return done(null, false, {message: 'Incorrect password.'});
                        }

                        return done(null, user);
                    });
                })
                .catch(error => {
                    return done(error);
                });
        }
    ));
};