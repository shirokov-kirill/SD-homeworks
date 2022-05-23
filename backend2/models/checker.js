const mongoose = require('mongoose');

const checkerSchema = mongoose.Schema({
    taskId: {
        type: Number,
        required: true
    },
    checker: {
        type: String,
        required: true
    }
});


const checkers = mongoose.model('Checkers', checkerSchema);

module.exports = checkers;