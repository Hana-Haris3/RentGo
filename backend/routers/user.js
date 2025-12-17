const  {userAuth, getUserProfile, submitreview}  = require('../controllers/user')
const { userOnly } = require('../middlewares/auth')

const router = require('express').Router()

router
    .route('/check')
    .get(userAuth)

router
    .route("/profile")
    .get(getUserProfile)

router
    .route('/submitreview')
    .post(submitreview)


module.exports = router
   