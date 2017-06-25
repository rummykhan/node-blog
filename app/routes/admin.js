const express = require('express')
    , router = express.Router()

    // Get Auth Middlewares
    , isGuest = require('../middleware/guest')
    , isAuthenticated = require('../middleware/user')

    , AuthController = require('../controller/AuthController')
    , DashboardController = require('../controller/admin/DashboardController')
    , PasswordController = require('../controller/admin/PasswordController');

router.get('/login', isGuest, AuthController.showLoginForm);
router.post('/login', AuthController.login);
router.get('/logout', isAuthenticated, AuthController.logout);

router.get('/', isAuthenticated, DashboardController.dashboard);

router.get('/change/password', isAuthenticated, PasswordController.showChangePasswordForm);
router.post('/change/password', isAuthenticated, PasswordController.changePassword);

module.exports = router;