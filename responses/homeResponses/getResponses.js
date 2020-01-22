const Users = require("../../model/users")
const Categories = require("../../model/categories")
const Products = require("../../model/products")

module.exports.login = function(req, res) {
    res.render('login', {
        error: req.flash('error') || []
    })
}

module.exports.index = function(req, res) {
    let categories = new Categories()
    let products = new Products()
    categories.getCategories((allCategories) => {
        products.getProducts((allProducts) => {
            res.render('index', {
                categories: allCategories,
                products: allProducts,
                user: req.user.name,
                role: req.user.role
            })
        })
    })

}