const express = require('express');
const { booking } = require('../controllers/bookingcontrol');
// const { default: Booking } = require('../../frontend/src/Components/Booking');


const router = express.Router();

router.route('/booking').post(booking);


module.exports = router;
