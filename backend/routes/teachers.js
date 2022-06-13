const router = require('express').Router()
const Hometasks = require('../models/hometask');
const Homeworks = require('../models/homework');
const {publish} = require("./publisher");

router.get('/homeworks', function(req, res, next){
    console.log("GET teacher/homeworks")
    Homeworks.find({}, function(err, docs){
        res.status(200)
        res.set("Access-Control-Allow-Origin", "*")
        res.send(docs)
    })
});

router.get('/tasks', function(req, res, next){
    console.log("GET teacher/tasks")
    Hometasks.find({}, function (err, docs){
        res.status(200)
        res.set("Access-Control-Allow-Origin", "*")
        res.send(docs)
    })
});

router.post('/tasks', async (req, res, next) => {
    await publish("checkers", {name: req.body.name, description: req.body.description, date: req.body.date, expirationDate: req.body.expirationDate, checker: req.body.checker})
    res.status(200)
    res.set("Access-Control-Allow-Origin", "*")
    res.send()
});

module.exports = router;