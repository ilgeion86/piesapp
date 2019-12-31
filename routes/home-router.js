const express = require('express')
const router = express.Router()
const controllers = require('../controllers/home-controllers')
const auth = require('../secondaryFunctions/checkAuthenticate')

router.get('/', auth.checkAuthenticated, controllers.get.index)
router.get('/login', auth.checkNotAuthenticated, controllers.get.login)

module.exports = router