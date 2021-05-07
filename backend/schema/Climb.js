const mongoose = require('mongoose');

const climbSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    altitude: {
        type: Number,
        required: true,
    },
    avgGrade: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    rating: Number,
    price: Number,
    distance: {
        type: Number,
        required: true
    },
    guide: String,
    isAvailable: Boolean
});

// TODO: can avgGrade and lat/lng related things be calculated from above? (i.e. remove them as properties?)

module.exports = mongoose.model('Climb', climbSchema);