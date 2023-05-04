import {User} from '../model/User.js'


export const getAlluser = async (req,res,next)=>{
    const users = await User.find();
    res.status(200).json({
        success:true,
        users,
    })
    // res.send("working properly");
}