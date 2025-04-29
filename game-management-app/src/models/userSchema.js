const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    age: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    isLegal: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);