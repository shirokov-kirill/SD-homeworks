const express = require('express');
const router = express.Router();
const Hometasks = require('../models/hometask')
const Homeworks = require('../models/homework')

router.get('/homeworks', function(req, res, next){
    Homeworks.find({}, function(err, docs){
        console.log(docs)
        res.status(200)
        res.send(docs)
    })
});

router.get('/tasks', function(req, res, next){
    Hometasks.find({}, function (err, docs){
        console.log(docs)
        res.status(200)
        res.send(docs)
    })
});

router.post('/addtask', function(req, res, next) {
    const task = req.body
    const name = task.name
    const date = task.date
    const description = task.description
    const expirationDate = task.expirationDate
    const checker = task.checker

    Hometasks.create({
        'name': name,
        'date': date,
        'task': description,
        'expirationDate': expirationDate,
        'checker': checker
    }, (err, doc) => {
        console.log(doc)
        console.log(err)
        if(err){
            res.status(500)
            res.send()
            return
        }
        res.status(200)
        res.send()
    })
});

module.exports = router;