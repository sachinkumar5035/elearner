import jwt from "jsonwebtoken";
import { CatchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../model/User.js";



export const isAuthenticated = CatchAsyncError(async(req,res,next)=>{

    const {token} = req.cookies;
    if(!token){
        return next(new ErrorHandler("please log in ",401));
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET_CODE);

    req.user = await User.findById(decoded._id);
    next();
})