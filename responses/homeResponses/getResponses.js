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
        res.render('index', {
            categories: allCategories,
            user: req.user.name,
            role: req.user.role
        })
    })

}

module.exports.products = function(req, res) {
    let products = new Products()
    let obj = Object.create(null)
    products.getProducts((allProducts) => {
        allProducts.forEach((product, i) => {
            obj[i] = product
        })
        res.json(JSON.stringify(obj))
    })
}