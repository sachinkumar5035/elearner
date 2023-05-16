import { CatchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../model/User.js";
import { Payment } from "../model/Payment.js";
import ErrorHandler from "../utils/errorHandler.js";
import { instance } from '../server.js';
import crypto from 'crypto';

export const buySubscrition = CatchAsyncError(async (req, res, next) => {

    const user = await User.findById(req.user._id);

    if (user.role === 'admin')
        return next(new ErrorHandler('admin can not buy subscription', 404));


    const plan_id = process.env.PLAN_ID || "plan_LoH8FaNqJECiLw";

    const subscription = await instance.subscriptions.create({
        plan_id,
        customer_notify: 1,
        total_count: 12
    })

    user.subscription.id = subscription.id; 
    user.subscription.status = subscription.status;

    await user.save();

    res.status(201).json({
        success: true,
        subscription,
        message:"you have subscribed this course"
    })

})

export const paymentVerification = CatchAsyncError(async(req,res,next)=>{

    const {razorpay_signature,razorpay_payment_id,razorpay_subscription_id} = req.body;

    const user = await User.findById(req.user._id);

    const subscriptionId = user.subscription.id;

    const generated_signature = crypto.createHmac("sha256",process.env.RAZORPAY_API_SECRET).update(razorpay_payment_id+"|"+razorpay_subscription_id,"utf-8").digest('hex');


    const isAuthentic = razorpay_signature === generated_signature;

    if(!isAuthentic)
        return res.redirect(`${process.env.FRONTEND_URL}/paymentfail`); // redirect to payment fail page in frontend
    
    
    await Payment.create({
        razorpay_signature,
        razorpay_payment_id,
        razorpay_subscription_id
    })

    user.subscription.status="active";
    
    await user.save();


    res.redirect(`${process.env.FRONTEND_URL}/paymentsuccess?refrence=${razorpay_payment_id}`); //redirect to payment successfull page  
   
    // res.status(200).json({
    //     success:true,
    //     message:"payment successfull"
    // })
})

// get razorpay api key
export const getRazorPayKey = CatchAsyncError(async(req,res,next)=>{

    res.status(200).json({
        success:true,
        key:process.env.RAZORPAY_API_KEY
    })
})

// cancel subscription
export const cancelSubscription = CatchAsyncError(async(req,res,next)=>{

    const user = await User.findById(req.user._id);

    const subscription_id = usre.subscription.id;
    let refund = false;

    await instance.subscriptions.cancel(subscription_id);
    const payment = await Payment.findOne({
        razorpay_subscription_id:subscription_id
    })

    const gap = Date.now()-payment.createdAt;

    const refundTime = process.env.REFUND_DAYS*24*60*60*1000;

    if(refundTime > gap ){
        await instance.payments.refund(payment.razorpay_payment_id);
        refund = true;
    }
    await payment.remove(); // if it does not work then user payment.deleteOne()
    user.subscription.id = undefined;
    user.subscription.status = undefined;
    await user.save();

    res.status(200).json({
        success:true,
        message:refund?"subscription cancelled, you will receive full refund within 7 days":"subscription cancelled, no refund initiated as subscription cancelled after 7 days"
    })
})


