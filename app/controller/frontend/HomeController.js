const models = require('../../models/index')
    , showdown = require('showdown')
    , converter = new showdown.Converter()
    , Sequelize = require('sequelize');

const HomeController = {
    home: function (req, res, next) {

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
    },

    displayPost: function (req, res, next) {

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
    }
};

module.exports = HomeController;