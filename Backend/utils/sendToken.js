export const sendToken = (res,user,message,statusCode=200)=>{

    const token = user.getJWTToken();
    console.log(token);
    const options={
        expires:new Date(Date.now()+15*24*60*60*1000),
        // httpOnly:true, // remove when using on local 
        // secure:true, // remove when using on local 
        // sameSite:"none" // remove when using on local 
    }
    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        message,
        isAuthenticated:true,
        user
    })
}