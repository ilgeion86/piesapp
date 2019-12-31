module.exports = {
    checkAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }
        res.render('login.ejs')
    },

    checkNotAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
            return res.redirect('/')
        }
        next()

    }
}