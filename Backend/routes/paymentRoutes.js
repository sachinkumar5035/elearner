import express  from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { buySubscrition } from "../controller/paymentController.js";


const router = express.Router();

// buy subscription
router.route('/subscribe').post(isAuthenticated,buySubscrition);

export default router;