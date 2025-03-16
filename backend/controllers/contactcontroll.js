const catchAsyncError = require('../middlewares/catchAsyncError');
const nodemailer = require("nodemailer");

//Register User - /api/v1/register
exports.newsletter = catchAsyncError(async (req, res, next) => {

  const { email } = req.body
  const { name } = req.body
  const { phone } = req.body
  const { message } = req.body


  // console.log(email,password , "bunbuhb");
  if (email) {

    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.in",
      port: 465,
      secure: true,
      logger: true,
      debug: true,
      secureConnection: false,
      auth: {
        user: process.env.MAILZOHO,
        pass: process.env.MAILPASSWORD
      },
      tls: {
        rejectUnauthorized: true
      }
    });

    const mailOptions = {
      from: process.env.MAILZOHO,
      to: email,
      subject: "Contact - HiddenValleyStay",
      html: `
                 <div style="height: auto; width:100% ;backgroud-color:white; padding:30px">
              <p style="padding:1px">  Name : ${name}</p>
             <p style="padding:1px">  Email : ${email}</p>
             <p style="padding:1px">  Number : ${phone}</p>
             <p style="padding:1px">  Message : ${message}</p>
           
             
             </div>
                  
            
              `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent successfully:", info.response);
      }
    });


  }



})


