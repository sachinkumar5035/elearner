import {createTransport} from 'nodemailer';
// import nodeMailer from 'nodemailer';

export const sendEmail= async(options)=>{
//    console.log(options.email);
//    console.log(options.subject);
//    console.log(options.message);
    const transporter = createTransport({
        host:process.env.SMTP_HOST, // differ by service
        port:process.env.SMTP_PORT, // differ by service
        service:process.env.SMTP_SERVICE, // name the service gmail, yahoo,outlook etc
        auth:{
            user:process.env.SMTP_MAIL,
            pass:process.env.SMTP_PASSWORD,
        },
    });
    console.log("email: "+options.email);
    console.log("message: "+options.message);
    console.log("subject: "+options.subject);
    const mailBody = {
        from: process.env.SMTP_MAIL, // kiski mail id se mail jayega
        to: options.email, // kisko mail jayega which is passed from reset password function
        subject:options.subject, // mail subject kya hoga
        text:options.message, // mail text which is passed from resetpassword function 
    }

    // this function will send the mail containing all the mail parameters
    await transporter.sendMail(mailBody);
}
