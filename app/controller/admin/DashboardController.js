const DashboardController = {
    dashboard: function (req, res) {
        res.render('admin/default/home-page/index', {title: 'Dashboard'})
    }
};

module.exports = DashboardController;