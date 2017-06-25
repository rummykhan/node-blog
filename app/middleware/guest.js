const appConfig = require('../../config/app');

// Guest Middleware
module.exports = function (req, res, next) {

    // Add CSRF Token to global for view templates.
    res.locals.csrfToken = req.csrfToken();

    if (!req.isAuthenticated()) {
        return next();
    }

    res.redirect(appConfig.adminPortal);
};