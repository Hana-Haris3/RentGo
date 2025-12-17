const { adminAuth, addCars, addCar, deleteCar, editDetails, viewReviews } = require('../controllers/admin')

const router = require('express').Router()

router
    .route('/check')
    .get(adminAuth)

router
    .route('/addcar')
    .post(addCar)

router
    .route('/editdetails/:id')
    .get(editDetails)
    
router
    .route('/deletecar/:id')
    .post(deleteCar)

router
    .route('/reviews')
    .get(viewReviews)

module.exports = router
