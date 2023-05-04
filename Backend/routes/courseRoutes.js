import express  from "express";
import { getAllCourses } from "../controller/courseController";

const router = express.Router();


router.route("/course").get(getAllCourses);

export default router;