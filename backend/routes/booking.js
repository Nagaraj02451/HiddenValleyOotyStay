const express = require('express');
const { booking } = require('../controllers/bookingcontrol');
const { keyrazorpay } = require('../controllers/bookingcontrol');
const { createbooking } = require('../controllers/bookingcontrol');
// const { default: Booking } = require('../../frontend/src/Components/Booking');


const router = express.Router();

// router.route('/booking').post(booking);
router.route('/get-razorpay-key').get(keyrazorpay);
router.route('/create-order').post(createbooking);
router.route('/pay-order').post(booking);


module.exports = router;
