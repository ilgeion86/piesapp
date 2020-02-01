const run = require('./queryExec/queryExecute')
const query = require('./queries/categories')

function Categories() {
    this.c_id,
        this.name
}

Categories.prototype.getCategories = function(callback) {
    run.query(query.GET_CATEGORIES, (data) => {
        callback(data.rows)
    })

}

module.exports = Categories