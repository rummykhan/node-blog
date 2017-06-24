const moment = require('moment');

module.exports.formatTime = function (time) {
    console.log('helpers: ', time);
    return moment(time).format('MM-DD-YYYY');
};