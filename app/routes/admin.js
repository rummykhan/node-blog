const express = require('express');
const router = express.Router();
const passport = require('passport');

// Use Sequelize for Mysql Queries.
const Sequelize = require('sequelize');

// Require Models.
const models = require('../models/index');

router.get('/',
    passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/admin/login'
    }),
    function (req, res, next) {
        res.send('Admin G');
    });

router.get('/login', function (req, res, next) {

    if (req.isAuthenticated()) {
        res.redirect('/admin/login');
    }

    console.log('Un-Authenticated');

    res.render('auth/default/login/index');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/admin/login'
}));

module.exports = router;