import express  from "express";
import { contact, courseRequest } from "../controller/otherController.js";



const router = express.Router();

router.route('/contact').post(contact)

router.route('/request').post(courseRequest);

// get admin dashboard stats


export default router;