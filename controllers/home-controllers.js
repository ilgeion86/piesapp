const Users = new require('../model/users')
module.exports = {
    get: {
        index: function(req, res) {
            res.send('Hello World!') //render
        },
        login: function(req, res) {
            res.render('login.ejs')
        }
    }
}