import express  from "express";
import { getAllCourses } from "../controller/courseController";

const router = express.Router();

router.route("/courses").get(getAllCourses);

export default router;