const crypto = require('crypto')

module.exports.createHash = function(password) {
    this.salt = Math.random(new Date().valueOf() * Math.random);
    this.hash = crypto.createHash('sha512')
        .update(password + salt)
        .digest('hex')
    return {
        salt: this.salt,
        hash: this.hash
    }
}

module.exports.compareHash = function(salt, interror_hash, external_hash) {

}