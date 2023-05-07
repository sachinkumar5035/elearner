import express  from "express";
import {getAlluser, login, logout, registerUser,getMyProfile} from '../controller/userController.js'
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

// get all users from DB
router.route("/users").get(getAlluser);

// register new user 
router.route('/register').post(registerUser);

// login
router.route('/login').post(login);

// logout
router.route('/logout').get(logout);


// user profile
router.route('/me').get(isAuthenticated,getMyProfile);


// change password 
// update profile 
// reset password 
// forget password 
// add to playlist 
// remove from playlist











export default router;