const  {userAuth, getUserProfile}  = require('../controllers/user')
const { userOnly } = require('../middlewares/auth')

const router = require('express').Router()

router
    .route('/check')
    .get(userAuth)

router
    .get("/profile",userOnly,getUserProfile)


module.exports = router
   