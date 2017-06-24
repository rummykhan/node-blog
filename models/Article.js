const conn = require('../connection');
const Sequelize = require('sequelize');
const showdown = require('showdown');
const converter = new showdown.Converter();
const User = require('./User');

const Article = conn.define('articles', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    title: {type: Sequelize.STRING},
    content: {type: Sequelize.TEXT},
    user_id: {type: Sequelize.STRING},
    slug: {type: Sequelize.STRING},
    intro: {type: Sequelize.STRING},
    isActive: {type: Sequelize.BOOLEAN},
    isDraft: {type: Sequelize.BOOLEAN},
    created_at: {type: Sequelize.DATE},
    updated_at: {type: Sequelize.DATE},
}, {
    underscored: true
});

Article.belongsTo(User, {as: 'user'});

module.exports = Article;