import express  from "express";
import {getAlluser} from '../controller/userController.js'

const router = express.Router();

router.route("/users").get(getAlluser);

export default router;