import express from 'express';
import dotenv from 'dotenv';


dotenv.config({ path: "./config/config.env" });

const app = express();


// using middle wares
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))


// importing routes
import courseRoute from './routes/courseRoutes.js';
import userRoute from './routes/userRoutes.js'

// importing middleware
import ErrorMiddleware from './middlewares/error.js';


app.use('/api/v1',courseRoute);
app.use('/api/v1',userRoute);

export default app;


app.use(ErrorMiddleware)