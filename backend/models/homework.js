const mongoose = require('mongoose');

const homeworkSchema = mongoose.Schema({
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
        },
        comments: {
            type: String
        },
        status: {
            type: String,
            required: true
        }
    }
});


const homeworks = mongoose.model('HomeWorks', homeworkSchema);

module.exports = homeworks;