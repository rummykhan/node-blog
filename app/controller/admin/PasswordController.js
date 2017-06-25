const PasswordController = {
    showChangePasswordForm: function (req, res) {
        res.render('admin/default/change-password/index');
    },

    changePassword: function (req, res) {

    }
};

module.exports = PasswordController;