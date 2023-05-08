import express from "express";
import { getAlluser, login, logout, registerUser, getMyProfile, changePassword, updateProfile, updateProfilePicture, forgetPassword, resetPassword } from '../controller/userController.js'
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
router.route('/me').get(isAuthenticated, getMyProfile);


// change password 
router.route('/changepassword').put(isAuthenticated, changePassword);

// update profile 
router.route('/updateprofile').put(isAuthenticated, updateProfile);

// update profile picture 
router.route('/updateprofilepicture').put(isAuthenticated, updateProfilePicture);


// forget password 
router.route('/forgetpassword').post(forgetPassword);

// reset password 
router.route('/resetpassword/:token').put(resetPassword);



// add to playlist 
// remove from playlist











export default router;