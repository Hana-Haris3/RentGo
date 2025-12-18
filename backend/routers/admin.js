import express from "express";
import { adminAuth, addCar } from "../controllers/admin.js";

const router = express.Router();

router
  .route("/check")
  .get(adminAuth);

router
  .route("/addcar")
  .post(addCar);

export default router;
// module.exports = router
