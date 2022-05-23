const mongoose = require('mongoose');

const homeworkSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    hometaskId: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    result: {
        mark: {
            type: Number,
            required: false
        },
        comments: {
            type: String,
            required: false
        },
        status: {
            type: String,
            required: true
        }
    }
});


const homeworks = mongoose.model('HomeWorks', homeworkSchema);

module.exports = homeworks;