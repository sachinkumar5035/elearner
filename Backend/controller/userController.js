import {User} from '../model/User.js'


export default getAlluser = async (req,res,next)=>{
    const users = await User.find();
    res.status(200).json({
        success:true,
        users,
    })
}