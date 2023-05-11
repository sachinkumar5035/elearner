import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config({ path: "./config/config.env" });

const app = express();


// using middle wares
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

// to access cookie
app.use(cookieParser()); 



// importing routes
import courseRoute from './routes/courseRoutes.js';
import userRoute from './routes/userRoutes.js'
import paymentRoute from "./routes/paymentRoutes.js"


// importing middleware
import ErrorMiddleware from './middlewares/error.js';

// prefix for all api 
app.use('/api/v1',courseRoute);
app.use('/api/v1',userRoute);
app.use('/api/v1',paymentRoute);

export default app;


app.use(ErrorMiddleware)