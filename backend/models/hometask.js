const mongoose = require('mongoose');

const hometaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    expirationDate: {
        type: String,
        required: true
    },
    checker: {
        type: String,
        required: true
    }
});


const hometasks = mongoose.model('Hometasks', hometaskSchema);

module.exports = hometasks;