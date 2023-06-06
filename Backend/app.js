import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'
dotenv.config({ path: "./config/config.env" });

const app = express();


// using middle wares
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
    methods:["GET","POST","DELETE","PUT"]
}))


// to access cookie
app.use(cookieParser()); 



// importing routes
import courseRoute from './routes/courseRoutes.js';
import userRoute from './routes/userRoutes.js'
import paymentRoute from "./routes/paymentRoutes.js"
import otherRoute from './routes/otherRoutes.js';


// importing middleware
import ErrorMiddleware from './middlewares/error.js';

// prefix for all api 
app.use('/api/v1',courseRoute);
app.use('/api/v1',userRoute);
app.use('/api/v1',paymentRoute);
app.use('/api/v1',otherRoute);


export default app;

app.get("/",(req,res)=>res.send(`<h1>server is working.click<a href="${process.env.FRONTEND_URL}">here</a> to go to frontend</h1>`))

app.use(ErrorMiddleware)