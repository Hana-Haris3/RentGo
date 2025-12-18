import express from "express";
import { userAuth, getUserProfile, updateUserProfile } from '../controllers/user.js';



const router = express.Router()

router
    .route('/check')
    .get(userAuth)

router
    .route("/profile")
    .get(getUserProfile)
router
    .route("/profile")
    .post(updateUserProfile)
// router
//     .route("/delete/:id")
//     .post(deleteUser)


// module.exports = router;
export default router


   