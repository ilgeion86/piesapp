const runQuery = require('../secondaryFunctions/queryExecute').runQuery

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

module.exports = Products