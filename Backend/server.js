import app from './app.js'
import connectToMongo from './config/database.js';
import cloudinary from 'cloudinary'


cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET_KEY
})

connectToMongo();

app.listen(process.env.PORT, () => {
    console.log(`server is listing on port : ${process.env.PORT}`);
})