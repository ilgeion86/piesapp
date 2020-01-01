const localStrategy = require('passport-local').Strategy
const Users = require('../model/users')
const encrypt = require('../encrypt/encryptor')
let users = new Users()
module.exports = async function(passport) {

    let authenticateUser = function(name, password, done) {
        users.getUserByName(name, (user) => {

            if (!user) {
                return done(null, false, { message: 'User with that name does not exist' })
            }

            try {
                const hash = user.hash
                const $hash = encrypt.hashForCompare(user.salt, password)
                if (hash === $hash) {
                    return done(null, user)
                } else {
                    return done(null, false, { message: 'Incorrect password' })
                }
            } catch (e) {
                return done(e)
            }

        })


    }


    passport.use(new localStrategy({
            usernameField: 'username',
            passwordField: 'password'
        },
        authenticateUser))

    passport.serializeUser((user, done) => {
        done(null, user.uid)
    })

    passport.deserializeUser((id, done) => {
        users.getUserById(id, (user) => {
            done(null, user)
        })
    })

}