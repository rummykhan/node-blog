const Joi = require('joi');

module.exports = {
    current_password: Joi.string().required().strip(),
    password: Joi.string().required().strip(),
    password_confirmation: Joi.string().required().strip(),
    _csrf: Joi.string().required(),
};