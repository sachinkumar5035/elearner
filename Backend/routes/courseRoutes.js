import express  from "express";
import {addLecture, createCourse, getAllcourse, getCourseLectures} from '../controller/courseController.js'
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// get all courses without lectures
router.route("/courses").get(getAllcourse);
//create new course -- admin route
router.route('/createcourse').post(singleUpload,createCourse);

// add lecture , delete lecture, get course details 
router.route('/course/:id').get(getCourseLectures).post(singleUpload,addLecture);



// delete course 

export default router;