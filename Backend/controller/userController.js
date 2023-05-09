import { User } from '../model/User.js'
import {Course} from '../model/Course.js';
import { CatchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from '../utils/sendToken.js';
import { sendMail } from '../utils/sendEmail.js'
import crypto from 'crypto';

// get list of all users from the DB 
export const getAlluser = CatchAsyncError(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users,
    })
    // res.send("working properly");
})


// register new user 
export const registerUser = CatchAsyncError(async (req, res, next) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return next(new ErrorHandler("please enter required fields", 400));
    }

    let user = await User.findOne({ email });
    if (user) {
        return next(new ErrorHandler("user already exists", 409));
    }

    user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "sample public id",
            url: "sample url"
        }
    })
    sendToken(res, user, "user registered successfully", 201);
})

// login a user
export const login = CatchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("please enter all mandatory fields", 400));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("incorrect email or password", 400));
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return next(new ErrorHandler("Incorrect email or password", 401));
    }

    sendToken(res, user, `welcome ${user.name}`, 200);

})

// logout user 
export const logout = CatchAsyncError(async (req, res, next) => {
    res.status(200).cookie("token", null, {
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "logged out successfulyy"
    })
})

// get a user profile when logged in
export const getMyProfile = CatchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user._id);

    res.status(200).json({
        success: true,
        user
    })

})


// change password
export const changePassword = CatchAsyncError(async (req, res, next) => {

    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
        return next(new ErrorHandler("please enter mandatory fields", 400));
    }

    const user = await User.findById(req.user._id).select("+password");

    const isMatch = await user.comparePassword(oldPassword);

    if (!isMatch) {
        return next(new ErrorHandler("please enter correct old password", 400));
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({
        success: true,
        message: "password changed successfully"
    })

})


// update profile
export const updateProfile = CatchAsyncError(async (req, res, next) => {

    const { name, email } = req.body;

    const user = await User.findById(req.user._id);

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    res.status(200).json({
        success: true,
        message: "profile updated successfully"
    })

})


//update profile picture
export const updateProfilePicture = CatchAsyncError(async (req, res, next) => {

    // const {file} = req.body;

    // const user = await User.findById(req.user._id);

    // await user.save();

    res.status(200).json({
        success: true,
        message: "profile picture updated successfully"
    })

})


// forgot password
export const forgetPassword = CatchAsyncError(async (req, res, next) => {

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return next(new ErrorHandler("user not found", 400));
    }

    const resetToken = await user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // send token via mail on registered mail id
    const resetPasswordUrl = `${process.env.FRONTEND_URL}/api/v1/resetpassword/${resetToken}`;

    const mailBody = `please click on link below if you have requested to forgot password ${resetPasswordUrl}. please ignore if not requested.`
    try {
        // this function in utils sendMail
        await sendMail({
            email: user.email,
            subject: "eLearner password recovery",
            message: mailBody
        });
        res.status(200).json({
            success: true,
            message: `mail sent to ${user.email} successfully`,
            resetToken
        });

    } catch (error) {
        // console.log("inside catch")
        user.resetPasswordToken = undefined; // resetPasswordToken userModel property
        user.resetPasswordExpire = undefined; //resetPasswordExpire userModel property
        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(error.message, 500));
    }

})

// reset password
export const resetPassword = CatchAsyncError(async (req, res, next) => {

    const { token } = req.params;
    
    const resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');
    
    const user =await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    })
    // console.log(user.email);
    if (!user) {
        return next(new ErrorHandler("token is invalid or expired", 400))
    }
    // console.log(user);
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    

    await user.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        message: "password changed successfully",
    })

})

// add to playlist
export const addToPlaylist = CatchAsyncError(async(req,res,next)=>{

    const user = await User.findById(req.user._id);

    const course = await Course.findById(req.body.id);// will pass from frontend

    if(!course)
        return next(new ErrorHandler("Invalid course Id"),404);

    const isExists = user.playlist.find((item)=>{
        if(item.course.toString() === course._id.toString()) return true;
    }) 

    if(isExists){
        return next(new ErrorHandler('item already exists',409));
    }

    user.playlist.push({
        course:course._id,
        poster:course.poster.url,
    })

    await user.save();
    res.status(200).json({
        success:true,
        message:"Added to playlist"
    })
})


//remove from playlist
export const removeFromPlaylist = CatchAsyncError(async(req,res,next)=>{

    const user = await User.findById(req.user._id);

    const course = await Course.findById(req.query.id);// will pass from frontend

    if(!course)
        return next(new ErrorHandler("Invalid course Id"),404);

    const newPlaylist = user.playlist.filter((item)=>{
        if(item.course.toString() !== course._id.toString()) return true;
    }) 

    user.playlist = newPlaylist;

    await user.save();
    res.status(200).json({
        success:true,
        message:"removed from playlist"
    })
})
