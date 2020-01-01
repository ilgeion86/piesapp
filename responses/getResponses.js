const Users = new require('../model/users')
module.exports.login = function(req, res) {
    res.render('login.ejs', { error: req.flash('error') || [] })
}