const express = require('express')
const router = express.Router()
const controllers = require('../controllers/home-controllers')
const auth = require('../secondaryFunctions/checkAuthenticate')

router.get('/', controllers.index)

module.exports = router