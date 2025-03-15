const catchAsyncError = require('../middlewares/catchAsyncError');
const nodemailer = require("nodemailer");

//Register User - /api/v1/register
exports.newsletter = catchAsyncError(async (req, res, next) => {
    const {email} = req.body
    const {name} = req.body
    const {phone} = req.body
    const {message} = req.body
 
    // console.log(email,password , "bunbuhb");
    if(email){
    

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "files.aweganyz@gmail.com",
                pass: "dlovgnhexemnhnlq"
            }
        });
        const mailOptions = {
            from: "hello@hiddenvalleystays.com",
            to: email ,  
            subject: "Contact",
            html: `
            <div style="height: auto; width:100% ;backgroud-color:white; padding:30px">
        <p style="padding:1px">  Name : ${name}</p>
        <p style="padding:1px">  Email : ${email}</p>
        <p style="padding:1px">  Number : ${phone}</p>
        <p style="padding:1px">  Message : ${message}</p>
       
         
         </div>
              
        
          `
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                // res.status(201).json({status:201,info})
            }
      
        })
        
    }

   

})


