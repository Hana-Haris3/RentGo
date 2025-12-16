const { adminAuth, addCars, addCar } = require('../controllers/admin')

const router = require('express').Router()

router
    .route('/check')
    .get(adminAuth)

router
    .route('/addcar')
    .post(addCar)
    
module.exports = router
