import mongoose from 'mongoose';

const connectToMongo=async ()=>{
    const connect = await mongoose.connect(process.env.DB_URI);
    console.log("connected to mongo");
}

export default connectToMongo;
