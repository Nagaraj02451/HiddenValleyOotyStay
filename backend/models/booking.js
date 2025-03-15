const mongoose = require('mongoose');
const validator = require('validator');

const booking = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [20, "name cannot exceed 20 characters"]
    },
    email: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [20, "name cannot exceed 20 characters"]
    },
    phone: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        maxLength: [20, "name cannot exceed 20 characters"]
    },
    room:{
        type: String,
        required: [true, 'Please enter email'],
        unique: true,
        validate: [20, 'Please enter valid email address']
    },
    tax: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        // maxLength: [100, "Message cannot exceed 100 characters"]
    },
    total: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        // maxLength: [100, "Message cannot exceed 100 characters"]
    },
    date: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        // maxLength: [100, "Message cannot exceed 100 characters"]
    },
    date2: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        // maxLength: [100, "Message cannot exceed 100 characters"]
    },
    adult: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        // maxLength: [100, "Message cannot exceed 100 characters"]
    },
    child: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        // maxLength: [100, "Message cannot exceed 100 characters"]
    },
    stay: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        // maxLength: [100, "Message cannot exceed 100 characters"]
    },
    selectedroom: {
        type: String,
        // required: [true, "Please enter product name"],
        trim: true,
        // maxLength: [100, "Message cannot exceed 100 characters"]
    },
})

let model =  mongoose.model('news', booking);


module.exports = model;