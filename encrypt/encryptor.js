const crypto = require('crypto')

module.exports.createHash = function(password) {
    this.salt = Math.round(
        (new Date().valueOf() * Math.random())
    ) + ''

    this.hash = crypto.createHash('sha512')
        .update(password + this.salt)
        .digest('hex')

    return { salt: this.salt, hash: this.hash }
}

module.exports.compareHash = function(salt, interior_hash, external_password) {
    this.hash = crypto.createHash('sha512')
        .update(external_password + salt)
        .digest('hex')

    if (this.hash === interior_hash) return true

}