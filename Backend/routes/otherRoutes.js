import express  from "express";
import { contact, courseRequest, getDashboardStats } from "../controller/otherController.js";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";



const router = express.Router();

router.route('/contact').post(contact)

router.route('/requestcourse').post(courseRequest);

// get admin dashboard stats
router.route('/admin/stats').get(isAuthenticated,isAdmin,getDashboardStats);

export default router;