import mongoose from 'mongoose';
import validator from "validator";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minLength: [6, 'password should be atleat 6 chars long'],
    select: false
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: "user"
  },
  subscription: {
    id: String,
    status: String,
  },
  avatar:{
    public_id:{
      type:String,
      required:true
    },
    url:{
      type:String,
      required:true
    }
  },
  playlist:[
    { 
      course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
        // course model ki ref Id milegi
      },
      poster:String,
    }
  ],
  createdAt:{
    type:Date,
    default:Date.now,
  },
  resetPasswordToken:String,
  resetPasswordExpire:String
});

export const User = mongoose.model("User", schema);