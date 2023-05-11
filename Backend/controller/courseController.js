import { Course } from "../model/Course.js";
import { CatchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary  from 'cloudinary';


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
    // fetching file 
    const file = req.file;
    const fileUri = getDataUri(file);

    // console.log(fileUri.content);
    // uploading file on cloudinary
    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);
    // console.log("file uploaded");
    await Course.create({
        title,
        description,
        category,
        createdBy,
        poster: {
            public_id: (await myCloud).secure_url,
            url: (await myCloud).secure_url
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

// max video size 100mb because we are using free version
export const addLecture = CatchAsyncError(async(req,res,next)=>{
    const {id} = req.params;
    const {title,description} = req.body;
    const course = await Course.findById(id);
    // const file  = req.file;
    if(!course)
        return next(new ErrorHandler("course not found",404));
    
    // upload file here on cloudinary

    const file = req.file;
    const fileUri = getDataUri(file);

    // console.log(fileUri.content);
    // uploading file on cloudinary
    const myCloud = await cloudinary.v2.uploader.upload(fileUri.content,{resource_type:"video"});

    course.lectures.push({
        title,
        description,
        video:{
            public_id:(await myCloud).public_id,
            url:(await myCloud).secure_url
        }
    })
    course.numOfVideos = course.lectures.length;
    await course.save();
    res.status(200).json({
        success:true,
        message:"lecture added successfully"
    })
})

// delete course
export const deleteCourse = CatchAsyncError(async(req,res,next)=>{
    const {id} = req.params;
    const course = await Course.findById(id);

    if(!course)
        return next(new ErrorHandler("course not found",409));

    await cloudinary.v2.uploader.destroy(course.poster.public_id);
    // console.log(course.poster.public_id)
    // deleting lecture one by one
    for (let index = 0; index < course.lectures.length; index++) {
        const element = course.lectures[index];
        await cloudinary.v2.uploader.destroy(element.video.public_id,{
            resource_type:"video"
        });
    }

    await course.deleteOne();

    res.status(200).json({
        success:true,
        message:"course deleted successfully"
    })

})


//delete lecture of a course
export const deleteLecture = CatchAsyncError(async(req,res,next)=>{

    const {courseId,lectureId} = req.query;

    const course = await Course.findById(courseId);
    if(!course)
        return next(new ErrorHandler("course not found",409));
    
    // find the lecture that has to be deleted
    const lecture = course.lectures.find((item)=>{
        if(item._id.toString()===lectureId) return item;
    })
    // remove from cloudinary
    await cloudinary.v2.uploader.destroy(lecture.video.public_id,{
        resource_type:"video"
    });

    // update the lecture array
    course.lectures = course.lectures.filter((lecture)=>{
        if(lecture._id.toString() !== lectureId.toString()) return lecture;
    })

    course.numOfVideos = course.lectures.length; // update size 
    await course.save(); // save course 
    
    res.status(200).json({
        success:true,
        message:"lecture deleted successfully"
    })
})