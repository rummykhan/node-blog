const appConfig = require('../../config/app');

// Guest Middleware
module.exports = function (req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }

    res.redirect(`${appConfig.adminPortal}`);
};