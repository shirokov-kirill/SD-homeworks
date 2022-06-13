const express = require('express');
const router = express.Router();
const Hometasks = require('../models/checker')
const Homeworks = require('../models/homework')

router.get('/tasks', function (req, res, next) {
    console.log("GET tasks")
    Hometasks.find({}, function(err, docs){
        res.status(200)
        res.send(docs)
    })
});

router.get('/attempts', function(req, res, next){
    console.log("GET attempts")
    Homeworks.find({}, (err, docs) => {
        if(err){
            res.status(500)
            res.send()
            return
        }
        res.status(200)
        res.send(docs)
    })
})

router.post('/attempts/:taskId', function (req, res, next){
    console.log("POST sttempts/:taskId")
    const taskId = req.params.taskId
    const answer = req.body
    const textAnswer = answer.text
    const date = new Date()
    Homeworks.find({}, (err, docs) => {
        const len = docs.length
        Homeworks.create({
            id: len,
            hometaskId: taskId,
            date: new Date(date.toISOString().split('T')[0]),
            answer: textAnswer,
            result: {status: "To Check"}
        }, async (err, doc) => {
            if(err){
                res.status(500)
                res.send()
            } else {
                //TODO проверка await
                res.status(200)
                res.send(doc)
            }
        })
    })
})



module.exports = router;