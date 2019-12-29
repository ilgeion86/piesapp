require('dotenv').config()
const { Pool } = require('pg')

module.exports = function(user = 'slava',
    password = process.env.DB_DEFAULT_PWD) {

}