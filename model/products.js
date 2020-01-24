const runQuery = require('../secondaryFunctions/queryExecute').runQuery
const runQueryWithParam = require('../secondaryFunctions/queryExecute').runQueryWithParam

function Products() {
    this.p_id,
        this.name,
        this.category
}

Products.prototype.getProducts = function(callback) {
    const query = 'select * from products'

    runQuery(query, (data) => {
        callback(data.rows)
    })
}
Products.prototype.getPriceAndCategory = function(categoryId, callback) {
    const query = `
    SELECT
        pro.p_id,
        pro.name,
        pri.price as price,
        cat.name as category
    FROM products pro
        INNER JOIN prices pri
            ON pro.p_id = pri.product_id
        INNER JOIN categories cat
            ON pro.category = cat.c_id
    WHERE cat.c_id = $1
    `

    let param = categoryId
    runQueryWithParam(query, param, (data) => {
        callback(data.rows)
    })
}

module.exports = Products