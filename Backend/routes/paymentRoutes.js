import express  from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { buySubscrition, cancelSubscription, getRazorPayKey, paymentVerification } from "../controller/paymentController.js";


const router = express.Router();

// buy subscription
router.route('/subscribe').post(isAuthenticated,buySubscrition);

// payment verification and save refrence in database
router.route("/paymentverification").post(isAuthenticated,paymentVerification);

// get razorpay api key
router.route('/razorpaykey').get(getRazorPayKey)

// cancel subscription
router.route('/subscribe/cancel').delete(isAuthenticated,cancelSubscription);


export default router;