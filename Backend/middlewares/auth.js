import jwt from "jsonwebtoken";
import { CatchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../model/User.js";



export const isAuthenticated = CatchAsyncError(async (req, res, next) => {

    try {
        const { token } = req.cookies;
        console.log(token);
        if (!token) {
            return next(new ErrorHandler("please log in ", 401));
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_CODE);
        req.user = await User.findById(decoded._id);
        next();
    } catch (error) {

    }
})


export const isSubscriber = (req, res, next) => {
    if (req.user.subscription.status !== 'active' && res.user.role !== 'admin') {
        return next(new ErrorHandler(`only subscribers can access these resource`, 403));
    }
    next();
}


export const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return next(new ErrorHandler(`${req.user.role} is not allowed to access these resource`, 403));
    }
    next();
}