const Users = require("../../model/users")
const Categories = require("../../model/categories")

module.exports.login = function(req, res) {
    res.render('login', {
        error: req.flash('error') || []
    })
}

module.exports.index = function(req, res) {
    let categories = new Categories()
    categories.getCategories((allCategories) => {
        res.render('index', {
            categories: allCategories,
            user: req.user.name,
            role: req.user.role
        })
    })

}