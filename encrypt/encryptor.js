const crypto = require('crypto')

function encrypt(password, salt) {
    return crypto.createHash('sha512')
        .update(password + salt)
        .digest('hex')
}

module.exports.createHash = function(password) {
    this.salt = Math.round(
        (new Date().valueOf() * Math.random())
    ) + ''

    this.hash = encrypt(password, this.salt)

    return { salt: this.salt, hash: this.hash }
}

module.exports.hashForCompare = function(salt, external_password) {
    return encrypt(external_password, salt)
}