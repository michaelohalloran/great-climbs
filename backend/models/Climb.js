const mongoose = require('mongoose');
const {Schema} = mongoose;

const climbSchema = new Schema({
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
    difficulty: {
        type: String,
        required: [true, 'Climb must have a difficulty ranking'],
        enum: {
            values: ['easy', 'challenging', 'hard', 'legendary'],
            message: 'Climb must be easy, challenging, hard, or legendary'
        } 
    },
    rating: {
        type: Number,
        min: [1, 'Minimum allowable rating is 1'],
        max: [5, 'Maximum allowable rating is 5']
    },
    price: Number,
    distance: {
        type: Number,
        required: true
    },
    guide: String,
    isAvailable: Boolean,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comments' // TODO: verify naming
        }
    ]
});

// TODO: can avgGrade and lat/lng related things be calculated from above? (i.e. remove them as properties?)

const Climb = mongoose.model('Climb', climbSchema);
module.exports = Climb;