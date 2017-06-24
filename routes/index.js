const express = require('express');
const app = express();
const router = express.Router();
const models = require('../models');
const showdown = require('showdown');
const converter = new showdown.Converter();
const Sequelize = require('sequelize');
const Infrastructure = require('../infrastructure');

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
            console.log(error);
        });
});

router.get('/post/:slug?', function (req, res, next) {

    const slug = req.params.slug;

    models.Article.findOne({
        where: {slug}, include: [
            {
                model: models.User,
                where: {
                    id: Sequelize.col('articles.user_id')
                },
                as: 'user'
            }
        ]
    })
        .then(article => {

            article.content = converter.makeHtml(article.content);
            article.created_at = Infrastructure.formatTime(article.created_at);

            res.render("frontend/default/post/index", {article, title: article.title});
        })
        .catch(error => {
            console.log(error);
        });
});

router.get('*', function (req, res) {
    res.send("404 Not Found!");
});

module.exports = router;