const Sequelize = require('sequelize');

const host = 'localhost';
const db = 'rehan_manzoor';
const username = 'root';
const password = '';

const conn = new Sequelize(db, username, password, {
    host,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

conn
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = conn;