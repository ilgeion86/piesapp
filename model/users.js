const run = require('./queryExec/queryExecute')
const query = require('./queries/users')

/**
 * Users it is a table of database
 * @constructor
 * @param {smallserial} uid - unique identifier
 * @param {string} name - unique name of user
 * @param {string} hash - password in hashed view
 * @param {string} salt - modificator of enter to hash function
 * @param {roles} role - modificator of enter to hash function
 * @param {roles} - ENUM('super', 'admin', 'user', 'guest')
 */
function Users() {
    this.uid,
        this.name,
        this.hash,
        this.salt,
        this.role
}

/**
 * Function getUserByName search user by indicated name
 * field name is unique
 */
Users.prototype.getUserByName = async function(name, callback) {
    run.queryWithParam(query.GET_USER_BY_NAME, name, (result) => {
        callback(result.rows[0])
    })
}

Users.prototype.getUserById = async function(id, callback) {
    run.queryWithParam(query.GET_USER_BY_ID, id, (result) => {
        callback(result.rows[0])
    })
}

module.exports = Users