const getRes = require('../responses/getResponses')
const postRes = require('../responses/postResponses')
const delRes = require('../responses/deleteResponses')
this.get = Object.create(null)
this.delete = Object.create(null)
this.post = Object.create(null)


this.get.index = function(req, res) {
    res.render('index', {
        user: req.user.name,
        role: req.user.role
    })
}
this.get.login = function(req, res) {
    getRes.login(req, res)
}
module.exports.get = this.get

this.post.login = function(req, res) {
    postRes.login(req, res)
}

module.exports.post = this.post

this.delete.logout = function(req, res) {
    delRes.logout(req, res)
}
module.exports.delete = this.delete