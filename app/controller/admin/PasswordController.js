const ChangePasswordRequest = require('../../requests/admin/change-password')
    , Joi = require('joi')
    , ValidationHelper = require('../../infrastructure/Validation')
    , bcrypt = require('bcrypt')
    , User = require('../../models/User');

const PasswordController = {
    showChangePasswordForm: function (req, res) {

        const errors = req.flash('errors')[0] || {};
        const message = req.flash('message');

        console.log('success: ', message);

        res.render('admin/default/change-password/index', {errors, message});
    },

    changePassword: function (req, res) {

        const validationResult = Joi.validate(req.body, ChangePasswordRequest);

        if (!!validationResult.error) {
            req.flash('errors', ValidationHelper.formatValidationErrors(validationResult.error.details));
            res.redirect('/admin/change/password');
            return;
        }

        if (req.body.password !== req.body.password_confirmation) {
            req.flash('errors', {password_confirmation: "'confirm password' is not same as password."});
            res.redirect('/admin/change/password');
            return;
        }

        User.findOne({where: {id: req.user.id}})
            .then(user => {

                if (!user) {
                    req.flash('errors', {current_password: "There was a problem while saving your password, please try again later."});
                    res.redirect('/admin/change/password');
                    return;
                }

                bcrypt.compare(req.body.current_password, user.password, function (error, result) {

                    if (!result) {
                        req.flash('errors', {current_password: "'current password' doesnot match."});
                        res.redirect('/admin/change/password');
                        return;
                    }

                    bcrypt.hash(req.body.password, 10, function (err, hash) {

                        if (err) {
                            req.flash('errors', {current_password: "There was a problem while saving your password, please try again later."});
                            res.redirect('/admin/change/password');
                            return;
                        }

                        user.password = hash;
                        user.save();

                        req.flash('message', "Password changed successfully!");
                        res.redirect('/admin/change/password');

                    });

                });

            });
    },
};

module.exports = PasswordController;