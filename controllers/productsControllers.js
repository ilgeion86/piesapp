const getRes = require('../responses/productsResponses/getResponses')

this.get = Object.create(null)

this.get.products = function(req, res) {
    getRes.products(req, res)
}
this.get.productsId = function(req, res) {
    getRes.productsId(req, res)
}

module.exports.get = this.get