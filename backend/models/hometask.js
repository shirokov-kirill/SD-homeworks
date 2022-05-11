const mongoose = require('mongoose');

const hometaskSchema = mongoose.Schema({
    lessonId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    checker: {
        type: String,
        required: true
    }
});


const hometasks = mongoose.model('Hometasks', hometaskSchema);

module.exports = hometasks;