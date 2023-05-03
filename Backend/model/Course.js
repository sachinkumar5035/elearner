import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        minLength: [8, 'title must be atleast 8 char long'],
        maxLength: [20, 'title must be maximum 20 char long']
    },
    description: {
        type: String,
        required: [true, 'description is required'],
        minLength: [10, 'description is atleast 10 char long'],
    },
    lecture: [
        {
            title: {
                type: String,
                required: [true, 'title is requied for lecture'],
                minLength: [4, 'title must be atleast 4 char long'],
            },
            description: {
                type: String,
                required: [true, 'description is required for lrcture'],
                minLength: [10, 'description is atleast 10 char long'],
            },
            video: {
                public_id: {
                    type: String,
                    required: true
                },
                url: {
                    type: String,
                    required: true
                }
            }
        }
    ],
    poster: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    views:{
        type:Number,
        default:0
    },
    numOfVideos:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        required:[true,"category is required"]
    },
    createdBy:{
        type:String,
        required:[true,"course creator is required"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

export const Course = mongoose.model("Course", schema);