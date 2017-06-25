const Joi = require('joi');

module.exports = {
    current_password: Joi.string().required(),
    password: Joi.string().required(),
    password_confirmation: Joi.string().required()
};