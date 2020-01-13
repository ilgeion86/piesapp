const getRes = require('../responses/homeResponses/getResponses')
const postRes = require('../responses/homeResponses/postResponses')
const delRes = require('../responses/homeResponses/deleteResponses')
this.get = Object.create(null)
this.delete = Object.create(null)
this.post = Object.create(null)


this.get.index = function(req, res) {
    res.render('index', {
        user: req.user.name,
        role: req.user.role,
        bool: true
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