const passport = require('passport')
    , appConfig = require('../../config/app');

const AuthController = {

    login: passport.authenticate('local', {
        successRedirect: appConfig.adminPortal,
        failureRedirect: appConfig.adminLogin
    }),

    showLoginForm: function (req, res) {
        res.render('auth/default/login/index');
    },

    logout: function (req, res) {
        req.logOut();
        res.redirect(appConfig.adminLogin);
    }
};

module.exports = AuthController;