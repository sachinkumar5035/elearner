import express  from "express";
import {createCourse, getAllcourse} from '../controller/courseController.js'

const router = express.Router();

// get all courses without lectures
router.route("/courses").get(getAllcourse);
//create new course -- admin route
router.route('/createcourse').post(createCourse);

// add lecture , delete lecture, get course details 

// delete course 

export default router;