const express = require('express');
const router = express.Router();
const Hometasks = require('../models/hometask')
const Homeworks = require('../models/homework')

router.get('/', function (req, res, next) {
    //TODO
});

router.post('/addtask', function(req, res, next) {
    const body = req.body
    const name = body.name
    const date = body.date
    const task = body.task
    const expirationDate = body.expirationDate
    const checker = body.checker

    Hometasks.create({
        'name': name,
        'date': date,
        'task': task,
        'expirationDate': expirationDate,
        'checker': checker
    }, (err, doc) => {
        if(err){
            res.status(500)
        }
        res.status(200)
    })
});

router.post('/checkresults/:taskId', function(req, res, next) {
    const taskId = req.params.taskId

    Homeworks.find({
        'hometaskId': taskId
    }, (err, docs) => {
        if(err){
            res.status(500)
        }
        //TODO sort
        res.status(200)
        res.send({items: docs})
    })
});

module.exports = router;