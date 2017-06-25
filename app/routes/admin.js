const express = require('express')
    , router = express.Router()
    , passport = require('passport')

    // Use Sequelize for Mysql Queries.
    , Sequelize = require('sequelize')

    // Require Models.
    , models = require('../models/index')

    // Get App Config
    , appConfig = require('../../config/app')

    // Get Auth Middleware
    , isGuest = require('../middleware/guest')
    , isAuthenticated = require('../middleware/user');

router.get('/login', isGuest, function (req, res) {
    res.render('auth/default/login/index');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: appConfig.adminPortal,
    failureRedirect: appConfig.adminLogin
}));

router.get('/', isAuthenticated, function (req, res) {
    res.render('admin/default/home-page/index', {title: 'Dashboard'})
});

router.get('/change/password', isAuthenticated, function (req, res) {
    res.render('admin/default/change-password/index');
});

router.get('/logout', isAuthenticated, function (req, res) {
    req.logOut();
    res.redirect(appConfig.adminLogin);
});

module.exports = router;