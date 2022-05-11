const express = require('express');
const router = express.Router();
const Hometasks = require('../models/hometask')
const Homeworks = require('../models/homework')

router.get('/tasks', function (req, res, next) {
    console.log("GET tasks")
    Hometasks.find({}, function(err, docs){
        res.status(200)
        res.send(docs)
    })
});

router.get('/tasks/:id', function (req, res, next) {
    
});

router.get('/attempts', function(req, res, next){

})

router.post('/attempts', function(req, res, next) {
    const forTask = req.body.taskId
    const date = Date.now()
    const answer = req.body.answer
    Homeworks.create({
        'hometaskId': forTask,
        'date': date,
        'answer': answer,
        'result': {'mark': null, 'comments': null, 'status': 'Processing'}
    }, (err, doc) => {
        //TODO отправить на проверку
        res.status = 200
        res.send()
    })
});



module.exports = router;