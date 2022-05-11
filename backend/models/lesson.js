const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});


const lessons = mongoose.model('Lessons', lessonSchema);

module.exports = lessons;