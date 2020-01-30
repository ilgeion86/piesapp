const Products = require("../../model/products")

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

module.exports.productsId = function(req, res) {
    let products = new Products()
    let obj = Object.create(null)
        //Take all products by category id
    products.getProductsByCategoryId(req.params["id"], (allProducts) => {
        allProducts.forEach((product, i) => {
            obj[i] = product
        })
        res.json(JSON.stringify(obj))
    })
}