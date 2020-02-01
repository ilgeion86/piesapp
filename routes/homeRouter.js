const express = require('express')
const router = express.Router()
const homeControllers = require('../controllers/homeControllers')

const auth = require('../secondaryFunctions/checkAuthenticate')
const passport = require('../configs/passport')

//GET
router.get('/', auth.checkAuthenticated, homeControllers.get.index)
router.get('/login', auth.checkNotAuthenticated, homeControllers.get.login)

//Ignore flavicon.ico
router.get('/favicon.ico', (req, res) => res.status(204))

//POST
router.post('/login', passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true
    }), homeControllers.post.login)
    //PUT

//UPDATE

//CONNECT, HEAD, OPTIONS, PATCH, TRACE. 

//DELETE
router.delete('/logout', homeControllers.delete.logout)

module.exports = router