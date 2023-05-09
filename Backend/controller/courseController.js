import { Course } from "../model/Course.js";
import { CatchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";



// to get list of all available courses in database
export const getAllcourse = CatchAsyncError(async (req, res, next) => {
    const course = await Course.find().select("-lectures"); // lecture will not select from the DB
    res.status(200).json({
        success: true,
        course,
    })
});

// to create a new course in database
export const createCourse = CatchAsyncError(async (req, res, next) => {

    const { title, description, category, createdBy } = req.body;

    if (!title || !description || !category || !createdBy) {
        return next(new ErrorHandler("please enter required fields", 400));
    }

    // const file = req.file;
    await Course.create({
        title,
        description,
        category,
        createdBy,
        poster: {
            public_id: "will get from cloudinary",
            url: "get from cloudinary"
        }
    });
    res.status(201).json({
        success: true,
        message: "course created successfully"
    })
})


// get all lectures of a course
export const getCourseLectures = CatchAsyncError(async (req, res, next) => {

    const course = await Course.findById(req.params.id);

    if (!course)
        return next(new ErrorHandler("course not found", 404));

    course.views += 1;

    await course.save();

    res.status(200).json({
        success: true,
        lectures: course.lectures
    })

})


export const addLecture = CatchAsyncError(async(req,res,next)=>{
    const {id} = req.params;
    const {title,description} = req.body;
    const course = await Course.findById(id);
    // const file  = req.file;
    if(!course)
        return next(new ErrorHandler("course not found",404));
        // upload file here on cloudinary
    course.lectures.push({
        title,
        description,
        video:{
            public_id:'url from cloudinary',
            url:'url from cloudinary'
        }
    })
    course.numOfVideos = course.lectures.length;
    await course.save();
    res.status(200).json({
        success:true,
        message:"lecture added successfully"
    })
})

