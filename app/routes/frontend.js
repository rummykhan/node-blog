const express = require('express');
const router = express.Router();

// Use Sequelize for Mysql Queries.
const Sequelize = require('sequelize');

// Showdown for Markdown conversion
const showdown = require('showdown');
const converter = new showdown.Converter();

// Require Models.
const models = require('../models/index');

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

            res.render("frontend/default/post/index", {article, title: article.title});
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;