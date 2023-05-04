import express  from "express";
import getAlluser from '../controller/userController.js'

const router = express.Router();

router.route("/user").get(getAlluser);

export default router;