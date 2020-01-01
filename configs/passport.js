const passport = require('passport')
const passport_initialize = require('./passport-local')
passport_initialize(passport)

module.exports = passport