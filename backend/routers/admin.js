const { adminAuth } = require('../controllers/admin')

const router = require('express').Router()

router
    .route('/check')
    .get(adminAuth)


module.exports = router
   