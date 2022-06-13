const router = require('express').Router();
const Hometasks = require('../models/hometask')
const Homeworks = require('../models/homework')
const {publish} = require("./publisher");

router.get('/tasks', function (req, res, next) {
    console.log("GET tasks")
    let currentDate = new Date().toISOString();
    Hometasks.find({'date': { $lte: currentDate }, 'expirationDate': { $gte: currentDate}}).sort({expirationDate: 1}).exec(function(err, docs){
        res.status(200)
        res.set("Access-Control-Allow-Origin", "*")
        res.send(docs)
    })
});

router.get('/attempts', function(req, res, next){
    console.log("GET attempts")
    Homeworks.find({'result.status': 'Checked'}, (err, docs) => {
        if(err){
            res.status(500)
            res.set("Access-Control-Allow-Origin", "*")
            res.send()
            return
        }
        res.status(200)
        res.set("Access-Control-Allow-Origin", "*")
        res.send(docs)
    })
})

router.post('/attempts/:taskId', async (req, res, next) => {
    console.log("POST attempts/:taskId")
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
            result: {mark: 0, comments: "", status: "To Check"}
        }, async (err, doc) => {
            if(err){
                res.status(500)
                res.set("Access-Control-Allow-Origin", "*")
                res.send()
                return
            }
            await publish("tasks", {taskId: taskId, text: textAnswer, attemptId: len})
            res.status(200)
            res.set("Access-Control-Allow-Origin", "*")
            res.send()
        })
    })
})



module.exports = router;