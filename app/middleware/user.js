const appConfig = require('../../config/app');

// Check if user is authenticated (Auth Middleware)
// if the user is not authenticated redirect him to login page.
module.exports = function (req, res, next) {

    // Add CSRF Token to global for view templates.
    res.locals.csrfToken = req.csrfToken();

    if (req.isAuthenticated()) {

        // Share user to the ejs
        res.locals.user = req.user;
        res.locals.app = appConfig;

        // Proceed to next.
        return next();
    }
    res.redirect(appConfig.adminLogin);
};