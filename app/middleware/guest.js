const appConfig = require('../../config/app');

// Guest Middleware
module.exports = function (req, res, next) {

    res.locals.csrfToken = req.csrfToken();

    if (!req.isAuthenticated()) {
        return next();
    }

    res.redirect(appConfig.adminPortal);
};