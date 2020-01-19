const db = require('../configs/db-connect').initdb()

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
    const client = await db.connect()
    const query = "SELECT * FROM USERS WHERE name = $1"
    try {
        const data = await db.query(query, [name])
        callback(data.rows[0])
    } catch (e) {
        console.log(e)
    } finally {
        client.release()
    }
}

Users.prototype.getUserById = async function(id, callback) {
    const client = await db.connect()
    const query = "SELECT * FROM USERS WHERE uid = $1"
    try {
        const data = await db.query(query, [id])
        callback(data.rows[0])
    } catch (e) {
        console.log(e)
    } finally {
        client.release()
    }
}

module.exports = Users