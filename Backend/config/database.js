import mongoose from 'mongoose';

const connectToMongo=async ()=>{
    const connect = await mongoose.connect(process.env.DB_URI);
    console.log("connected to mongo");
}

export default connectToMongo;



// DB_URI=mongodb+srv://sachin:Sachin563@@cluster0.tlmy32t.mongodb.net/eLearner?retryWrites=true