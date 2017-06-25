const express = require('express')
    , router = express.Router()
    , HomeController = require('../controller/frontend/HomeController');

router.get('/', HomeController.home);
router.get('/post/:slug?', HomeController.displayPost);

module.exports = router;