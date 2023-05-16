import express  from "express";
import {addLecture, createCourse, deleteCourse, deleteLecture, getAllcourse, getCourseLectures} from '../controller/courseController.js'
import singleUpload from "../middlewares/multer.js";
import { isAdmin, isAuthenticated, isSubscriber } from "../middlewares/auth.js";

const router = express.Router();

// get all courses without lectures
router.route("/courses").get(getAllcourse);
//create new course -- admin route
router.route('/createcourse').post(isAuthenticated,isAdmin,singleUpload,createCourse);

// add lecture , delete lecture, get course details 
router.route('/course/:id').get(isAuthenticated,isSubscriber,getCourseLectures).post(isAuthenticated,isAdmin,singleUpload,addLecture).delete(isAuthenticated,isAdmin,deleteCourse);

// delete lecture
router.route('/lecture').delete(isAuthenticated,isAdmin,deleteLecture); 

export default router;