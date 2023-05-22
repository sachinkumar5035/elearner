import { CatchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";
import { Stats } from "../model/Stats.js";

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

    const stats = await Stats.find({}).sort({createdAt:"desc"}).limit(12);

    const statsData = [];

    for (let index = 0; index < stats.length; index++) {
        const element = stats[index];
        statsData.unshift(element);
    }
    const requiredSize = 12-stats.length;
    for (let index = 0; index < requiredSize; index++) {
        statsData.unshift({
            users:0,
            subscription:0,
            views:0
        });
    }

    const userCount = statsData[11].users; // last month 
    const subscriptionCount = statsData[11].subscription; // last month
    const viewsCount = statsData[11].views; // last month

    let userPercentage = 0;
    let viewsPercentage=0;
    let subscriptionPercentage=0;
    let usersProfit=true;
    let subscriptionProfit=true;
    let viewsProfit=true;
    // getting percentage profit for last moth base for it will be 10th month
    // 11th month have 25
    // 10th month have 20
    // percentage will be ((25-20)/20)*100
    if(statsData[10].users===0) userPercentage=statsData[11].users*100;
    if(statsData[10].views===0) viewsPercentage=statsData[11].views*100;
    if(statsData[10].subscription===0) subscriptionPercentage=statsData[11].subscription*100;
    else{
        const difference={
            users : statsData[11].users-statsData[10].users,
            views: statsData[11].views-statsData[10].views,
            subscription: statsData[11].subscription-statsData[10].subscription
        }
        userPercentage = (difference.users/statsData[10].users)*100,
        viewsPercentage=(difference.views/statsData[10].views)*100,
        subscriptionPercentage=(difference.subscription/statsData[10].subscription)*100
        if(userPercentage<0){
            usersProfit=false;
        }
        if(viewsPercentage<0){
            viewsProfit=false;
        }
        if(subscriptionPercentage<0){
            subscriptionProfit=false;
        }
    }

    res.status(200).json({
        success:true,
        stats:statsData, // for entire year 
        count:statsData.length,
        userCount:userCount, 
        subscriptionCount:subscriptionCount,
        viewsCount:viewsCount,
        userPercentage:userPercentage,
        subscriptionPercentage:subscriptionPercentage,
        viewsPercentage:viewsPercentage,
        usersProfit:usersProfit,
        viewsProfit:viewsProfit,
        subscriptionProfit:subscriptionProfit
    })

})
