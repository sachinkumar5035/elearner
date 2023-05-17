import { CatchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";


export const contact = CatchAsyncError(async (req, res, next) => {

    try {
        const { name, from, text } = req.body;
        if (!name || !from || !text) {
            return next(new ErrorHandler("please enter all mandatory fields", 404));
        }
        const email = process.env.MY_MAIL;
        const subject = "Contact from eLearner";
        const message = `I am ${name} and my email id is ${from}.\n${text}`
        await sendMail({email, subject, message}); // need  a new function to send a mail from a given mail id to a given mail id
        res.status(200).json({
            success: true,
            message: 'Your message has been sent'
        })
    }
    catch (error) {
        console.log(error.message);
    }
})


export const courseRequest = CatchAsyncError(async (req, res, next) => {

    const { name, from, course } = req.body;
    if (!name || !from || !course) {
        return next(new ErrorHandler("please enter all mandatory fields", 404));
    }
    const email = process.env.MY_MAIL;
    const subject = "Request for course from eLearner";
    const message = `I am ${name} and my email id is ${from}. \n ${course}`;
    await sendEmail( {email, subject, message}); // need to change from and to mail id make a function 
    res.status(200).json({
        success: true,
        message: 'Your request has been sent.'
    })
})

export const getDashboardStats = CatchAsyncError(async (req, res, next) => {

})