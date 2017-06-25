const ChangePasswordRequest = require('../../requests/admin/change-password')
    , Joi = require('joi');

const PasswordController = {
    showChangePasswordForm: function (req, res) {
        res.render('admin/default/change-password/index');
    },

    changePassword: function (req, res) {

        const validationResult = Joi.validate(req.body, ChangePasswordRequest);

        if (!!validationResult.error) {

        }

        res.redirect('/admin/change/password');
    }
};

module.exports = PasswordController;