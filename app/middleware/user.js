const appConfig = require('../../config/app');

// Check if user is authenticated (Auth Middleware)
// if the user is not authenticated redirect him to login page.
module.exports = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect(`${appConfig.adminPortal}/login`);
};