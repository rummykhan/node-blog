const appConfig = require('../../config/app');

// Check if user is authenticated (Auth Middleware)
// if the user is not authenticated redirect him to login page.
module.exports = function (req, res, next) {

    res.locals.csrfToken = req.csrfToken();

    console.log('auth: ', req.isAuthenticated());

    if (req.isAuthenticated()) {

        // Share user to the ejs
        res.locals.user = req.user;
        res.locals.app = appConfig;

        // Proceed to next.
        return next();
    }
    res.redirect(appConfig.adminLogin);
};