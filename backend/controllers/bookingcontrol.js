const catchAsyncError = require('../middlewares/catchAsyncError');
const nodemailer = require("nodemailer");

//Register User - /api/v1/register
exports.booking = catchAsyncError(async (req, res, next) => {
  
        const {email} = req.body
        const {name} = req.body
        const {phone} = req.body
        const {room} = req.body
        const {tax} = req.body
        const {total} = req.body
        const {date} = req.body
        const {date2} = req.body
        const {adult} = req.body
        const {child} = req.body
        const {stay} = req.body
        const {selectedroom} = req.body
    // console.log(email,password , "bunbuhb");
    if(email){
    
        alert("Send successfully")

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
            subject: "Booking",
            html: `
            <div style="height: auto; width:100% ;backgroud-color:white; padding:30px">
   
         <p style="padding:1px">  Name : ${name}</p>
        <p style="padding:1px">  Email : ${email}</p>
        <p style="padding:1px">  Number : ${phone}</p>
        <p style="padding:1px">  Room : ${room}</p>
        <p style="padding:1px">  Tax : ${tax}</p>
        <p style="padding:1px">  Total : ${total}</p>
        <p style="padding:1px">  Check in Date : ${date}</p>
        <p style="padding:1px">  Check out date : ${date2}</p>
        <p style="padding:1px">  Adult : ${adult}</p>
        <p style="padding:1px">  Child : ${child}</p>
        <p style="padding:1px">  Stay : ${stay}</p>
        <p style="padding:1px">  Selected Room : ${selectedroom}</p>
       
         
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


