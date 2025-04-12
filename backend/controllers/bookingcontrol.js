const Booking = require('../models/booking');
const catchAsyncError = require('../middlewares/catchAsyncError');
const nodemailer = require("nodemailer");
const Razorpay = require('razorpay');


// app.get('/get-razorpay-key', (req, res) => {
//   res.send({ key: process.env.RAZORPAY_KEY_ID });
// });

exports.keyrazorpay = catchAsyncError(async (req, res, next)=>{
  res.send({ key: process.env.RAZORPAY_KEY_ID });
})

exports.createbooking = catchAsyncError(async(req, res, next)=>{
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = {
      amount: req.body.amount,
      currency: 'INR',
    };
    const order = await instance.orders.create(options);
    if (!order) return res.status(500).send('Some error occured');
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
})

//Register User - /api/v1/register
exports.booking = catchAsyncError(async (req, res, next) => {
  const {email, name, phone, room, tax, total, date, date2, adult, child, stay, selectedroom, amount, razorpayOrderId, razorpayPaymentId, razorpaySignature} = req.body;
  
  try {
    const newBooking = new Booking({
      isPaid: true,
      amount: amount,
      razorpay: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
      name,
      email,
      phone,
      room,
      tax,
      total,
      date,
      date2,
      adult,
      child,
      stay,
      selectedroom
    });

    await newBooking.save();
    
    res.send({
      msg: 'Payment was successful'
    });

    // Send email
    if(email) {
      const transporter = nodemailer.createTransport({
         host: "smtppro.zoho.in",
         port: 465,
         secure: true,
         logger: true,
         debug: true,
         secureConnection: false,
         auth: {
           user: process.env.MAILZOHOBOOKING,
           pass: process.env.MAILPASSWORDbOOKING
         },
         tls: {
           rejectUnauthorized: true
         }
       });

      const mailOptions = {
         from: process.env.MAILZOHOBOOKING,
         to: email,
         subject: "Boooking - HiddenValleyStay",
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
          console.error("Error sending email:", error);
        } else {
          console.log("Email sent successfully:", info.response);
        }
      });
    }

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});


