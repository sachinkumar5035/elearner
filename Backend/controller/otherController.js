import { CatchAsyncError } from "../middlewares/catchAsyncError.js";


export const contact = CatchAsyncError(async(req,res,next)=>{

    res.stauts(200).json({
        success:true,
        message:'contacted'
    })
})


export const courseRequest = CatchAsyncError(async(req,res,next)=>{

    res.stauts(200).json({
        success:true,
        message:'requested '
    })
})