const localStrategy = require('passport-local').Strategy
const db = require('./db-connect')
module.exports.passport_initialize = async function(passport) {
    const authenticateUser = function(email, password, done) {

    }


    passport(new localStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }), authenticateUser)


}