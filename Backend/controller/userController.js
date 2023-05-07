import {User} from '../model/User.js'
import { CatchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from '../utils/sendToken.js';

// get list of all users from the DB 
export const getAlluser = CatchAsyncError(async (req,res,next)=>{
    const users = await User.find();
    res.status(200).json({
        success:true,
        users,
    })
    // res.send("working properly");
})


// register new user 
export const registerUser = CatchAsyncError(async(req,res,next)=>{
   
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        return next(new ErrorHandler("please enter required fields",400));
    }

    let user =await User.findOne({email});
    if(user){
        return next(new ErrorHandler("user already exists",409));
    }

    user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"sample public id",
            url:"sample url"
        }
    })
    sendToken(res,user,"user registered successfully",201);
})

// login a user
export const login = CatchAsyncError(async(req,res,next)=>{
    const {email,password} = req.body;
    
    if(!email || !password){
        return next(new ErrorHandler("please enter all mandatory fields",400));
    }
    const user =await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("incorrect email or password",400));
    }
    
    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return next(new ErrorHandler("Incorrect email or password",401));
    }
   
    sendToken(res,user,`welcome ${user.name}`,200);
    
})

// logout user 
export const logout = CatchAsyncError(async(req,res,next)=>{
    res.status(200).cookie("token",null,{
        expires:new Date(Date.now())
    }).json({
        success:true,
        message:"logged out successfulyy"
    })
})

// get a user profile when logged in
export const getMyProfile = CatchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.user._id);

    res.status(200).json({
        success:true,
        user
    })

})