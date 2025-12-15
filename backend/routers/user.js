const  {userAuth}  = require('../controllers/user')

const router = require('express').Router()

router
    .route('/check')
    .get(userAuth)


module.exports = router
   