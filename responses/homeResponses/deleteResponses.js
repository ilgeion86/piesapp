module.exports.logout = function(req, res) {
    req.logOut()
    res.redirect('/login')
}