const run = require('./queryExec/queryExecute')
const query = require('./queries/products')

function Products() {
    this.p_id,
        this.name,
        this.category
}

Products.prototype.getProducts = function(callback) {
    run.query(query.GET_PRODUCTS, (data) => {
        callback(data.rows)
    })
}
Products.prototype.getProductsByCategoryId = function(categoryId, callback) {

    let param = categoryId
    run.queryWithParam(query.GET_PRODUCTS_BY_CATEGORY_ID, param, (data) => {
        callback(data.rows)
    })
}

module.exports = Products