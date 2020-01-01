const Users = new require('../model/users')
this.get = Object.create(null)
this.delete = Object.create(null)
this.post = Object.create(null)
this.get.index = function(req, res) {
    res.render('index.ejs', {
        user: req.user.name,
        role: req.user.role
    })
}
this.get.login = function(req, res) {
    res.render('login.ejs', { error: req.flash('error') || [] })

}
module.exports.get = this.get

this.post.login = function(req, res) {
    res.redirect('/')
}

module.exports.post = this.post

this.delete.logout = function(req, res) {
    req.logOut()
    res.redirect('/login')
}
module.exports.delete = this.delete