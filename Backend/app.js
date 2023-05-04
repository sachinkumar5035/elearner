import express from 'express';
import dotenv from 'dotenv';


dotenv.config({ path: "./config/config.env" });

const app = express();

// importing routes
// import courseRoute from './routes/courseRoutes.js';
import userRoute from './routes/userRoutes.js'


// app.use('/api/v1',courseRoute);
app.use('/api/v1',userRoute);

export default app;
