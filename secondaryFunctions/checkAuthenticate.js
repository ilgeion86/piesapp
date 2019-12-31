module.exports = {
    checkAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }
        res.send('Not authenticated')
    },

    checkNotAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
            return res.redirect('/')
        }
        next()

    }
}