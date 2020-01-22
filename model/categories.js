const runQuery = require('../secondaryFunctions/queryExecute').runQuery

function Categories() {
    this.c_id,
        this.name
}

Categories.prototype.getCategories = async function(callback) {
    const query = 'select * from categories'
    runQuery(query, (data) => {
        callback(data.rows)
    })

}

module.exports = Categories