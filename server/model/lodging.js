const mongoose = require('mongoose');
const Booking = require('./booking');

const lodgingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    num_rooms: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
});

const Lodging = mongoose.model('Lodging', lodgingSchema);

module.exports = Lodging;