const express = require('express')
    , router = express.Router()
    , passport = require('passport')

    // Use Sequelize for Mysql Queries.
    , Sequelize = require('sequelize')

    // Require Models.
    , models = require('../models/index');

router.get('/', function (req, res, next) {

    if (!req.isAuthenticated()) {
        res.status(401).redirect('/admin/login');
    }

    res.send('Admin G');
});

router.get('/login', function (req, res, next) {

    if (req.isAuthenticated()) {
        res.redirect('/admin');
    }

    res.render('auth/default/login/index');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/admin/login'
}));

module.exports = router;