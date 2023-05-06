import { Course } from "../model/Course.js";
import { CatchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";



// to get list of all available courses in database
export const getAllcourse = CatchAsyncError(async (req,res,next)=>{
    const course = await Course.find().select("-lecture"); // lecture will not select from the DB
    res.status(200).json({
        success:true,
        course,
    })
});

// to create a new course in database
export const createCourse = CatchAsyncError(async(req,res,next)=>{

    const {title,description,category,createdBy} = req.body;

    if(!title || !description || !category || !createdBy){
        return next(new ErrorHandler("please enter required fields",400));
    }

    // const file = req.file;
    await Course.create({
        title,
        description,
        category,
        createdBy,
        poster:{
            public_id:"will get from cloudinary",
            url:"get from cloudinary"
        }
    });
    res.status(201).json({
        success:true,
        message:"course created successfully"
    })
})  