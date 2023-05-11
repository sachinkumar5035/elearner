import express from "express";
import { getAlluser, login, logout, registerUser, getMyProfile, changePassword, updateProfile, updateProfilePicture, forgetPassword, resetPassword, addToPlaylist, removeFromPlaylist, getAllusers, updateUserRole, deleteUser, deleteProfile } from '../controller/userController.js'
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";


const router = express.Router();

// get all users from DB
router.route("/users").get(getAlluser);

// register new user 
router.route('/register').post(singleUpload,registerUser);

// login
router.route('/login').post(login);

// logout
router.route('/logout').get(logout);

// user profile
router.route('/me').get(isAuthenticated, getMyProfile);

//delete profile
router.route('/me').delete(isAuthenticated,deleteProfile);

// change password 
router.route('/changepassword').put(isAuthenticated, changePassword);

// update profile 
router.route('/updateprofile').put(isAuthenticated, updateProfile);

// update profile picture 
router.route('/updateprofilepicture').put(isAuthenticated, singleUpload,updateProfilePicture);

// forget password 
router.route('/forgetpassword').post(forgetPassword);

// reset password 
router.route('/resetpassword/:token').put(resetPassword);

// add to playlist 
router.route('/addtoplaylist').post(isAuthenticated,addToPlaylist);

// remove from playlist
router.route('/removefromplaylist').delete(isAuthenticated,removeFromPlaylist);

// admin routes
// get all users
router.route('/admin/users').get(isAuthenticated,isAdmin,getAllusers);

// update user role and delete user 
router.route('/admin/user/:id').put(isAuthenticated,isAdmin,updateUserRole).delete(isAuthenticated,isAdmin,deleteUser);


export default router;