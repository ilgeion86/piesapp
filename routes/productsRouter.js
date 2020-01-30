const express = require('express')
const router = express.Router()
const auth = require('../secondaryFunctions/checkAuthenticate')
const productsControllers = require('../controllers/productsControllers')

router.get('/', auth.checkAuthenticated, productsControllers.get.products)
    /**
     * @todo To create a new router for /products . . .
     */
router.get('/:id', auth.checkAuthenticated, productsControllers.get.productsId)

module.exports = router