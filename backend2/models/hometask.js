const mongoose = require('mongoose');


const hometaskSchema = mongoose.Schema({
    id: {
        type: Number,
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
    }
});


let hometasks;

if (mongoose.models.Hometasks) {
    hometasks = mongoose.model('Hometasks');
} else {
    hometasks = mongoose.model('Hometasks', hometaskSchema);
}
module.exports = hometasks;