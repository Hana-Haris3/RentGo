const { adminAuth, addCars, addCar, deleteCar, editDetails, viewReviews, viewsingleReview, deleteReview, viewCarDetails } = require('../controllers/admin')

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

router
    .route('/viewreviews/:id')
    .get(viewsingleReview)

router
    .route('/deletereview/:id')
    .post(deleteReview)

module.exports = router
