const express = require('express')
const router = express.Router()
const controllers = require('../controllers/home-controllers')
const auth = require('../secondaryFunctions/checkAuthenticate')
const passport = require('../configs/passport')

router.get('/', auth.checkAuthenticated, controllers.get.index)
router.get('/login', auth.checkNotAuthenticated, controllers.get.login)

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
}), controllers.post.login)

router.delete('/logout', controllers.delete.logout)

//Ignore flavicon.ico
router.get('/favicon.ico', (req, res) => res.status(204))

module.exports = router