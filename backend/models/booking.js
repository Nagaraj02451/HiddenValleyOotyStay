const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  isPaid: {
    type: Boolean,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  razorpay: {
    orderId: String,
    paymentId: String,
    signature: String
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  room: {
    type: String,
    required: true
  },
  tax: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  date2: {
    type: Date,
    required: true
  },
  adult: {
    type: Number,
    required: true
  },
  child: {
    type: Number,
    required: true
  },
  stay: {
    type: String,
    required: true
  },
  selectedroom: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
