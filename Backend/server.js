import app from './app.js'
import connectToMongo from './config/database.js';
import cloudinary from 'cloudinary';
import RazorPay from 'razorpay';
import nodeCron from 'node-cron';
import { Stats } from './model/Stats.js';


export const instance = new RazorPay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET_KEY
})

connectToMongo();

// nodecron is used to schedule a task 
nodeCron.schedule("0 0 0 1 * *",async()=>{ // day one of every month it will create a new stats
    try {
        await Stats.create({}); 
    } catch (error) {
        console.log(error.message);
    }
})

app.listen(process.env.PORT, () => {
    console.log(`server is listing on port : ${process.env.PORT}`);
})