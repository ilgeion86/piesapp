const express = require('express')
const router = express.Router()
const controllers = require('../controllers/home-controllers')
const auth = require('../secondaryFunctions/checkAuthenticate')
const passport = require('../configs/passport')

//GET
router.get('/', auth.checkAuthenticated, controllers.get.index)
router.get('/login', auth.checkNotAuthenticated, controllers.get.login)
router.get('/products', auth.checkAuthenticated, controllers.get.products)

//Ignore flavicon.ico
router.get('/favicon.ico', (req, res) => res.status(204))

//POST
router.post('/login', passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true
    }), controllers.post.login)
    //PUT

//UPDATE

//CONNECT, HEAD, OPTIONS, PATCH, TRACE. 

//DELETE
router.delete('/logout', controllers.delete.logout)

module.exports = router