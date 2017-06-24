const express = require('express');
const router = express.Router();
const passport = require('passport');

// Use Sequelize for Mysql Queries.
const Sequelize = require('sequelize');

// Require Models.
const models = require('../models/index');

router.get('/admin',
    passport.authenticate('local', {
        successRedirect: '/adminsss',
        failureRedirect: '/admin/login'
    }),
    function (req, res, next) {

        res.send('Admin G');
    });

router.get('/admin/login', function (req, res, next) {
    res.send('Admin Login');
});

module.exports = router;