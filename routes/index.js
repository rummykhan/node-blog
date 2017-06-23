const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models');

router.get('/', function (req, res, next) {
    models.Article.findAll({
        isActive: false, order: [
            ['created_at', 'DESC']
        ]
    })
        .then(articles => {
            res.render("frontend/default/home-page/index", {title: 'Home', articles});
        })
        .catch(error => {

        });
});

router.get('/me', function (req, res) {
    res.send("Hello @therummykhan");
});

router.get('/who/:name?', function (req, res) {
    let name = req.params.name;
    if (!name) {
        name = '@who';
    } else {
        name = `@${name}`;
    }
    res.send(`Hello ${name}`);
});

router.get('*', function (req, res) {
    res.send("404 Not Found!");
});

module.exports = router;