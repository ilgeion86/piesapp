const Users = require("../../model/users")

module.exports.login = function(req, res) {
    res.render('login', {
        error: req.flash('error') || []
    })
}