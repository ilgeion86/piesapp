const { Pool } = require('pg')

module.exports.initdb = function(user = 'slava', password = '1234567') {
    return new Pool({
        user: user,
        password: password,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME
    })
}