const { viewCars } = require('../controllers/public')

const router = require('express').Router()

router
    .route('/cars')
    .get(viewCars)


module.exports = router
   