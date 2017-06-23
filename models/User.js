const conn = require('../connection');
const Sequelize = require('sequelize');

const User = conn.define('users', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    password: {type: Sequelize.STRING},
    remember_token: {type: Sequelize.STRING},
    created_at: {type: Sequelize.DATE},
    updated_at: {type: Sequelize.DATE}
}, {
    underscored: true
});

module.exports = User;