const express = require('express')
    , router = express.Router()
    , passport = require('passport')

    // Use Sequelize for Mysql Queries.
    , Sequelize = require('sequelize')

    // Require Models.
    , models = require('../models/index')
    , appConfig = require('../../config/app');

router.get('/login', isGuest, function (req, res) {
    res.render('auth/default/login/index');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: appConfig.adminPortal,
    failureRedirect: appConfig.adminLogin
}));

router.get('/', isAuthenticated, function (req, res) {
    res.send('Admin G');
});

module.exports = router;