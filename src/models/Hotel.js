const mongoose = require('mongoose');

const hotel = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    stars: {
        type: Number
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    amenities: {
        type: [String]
    }
});

module.exports = mongoose.model('Hotel', hotel);