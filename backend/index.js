const amqp = require('amqplib');
const express = require('express');
const cors = require('cors');
require('./models/connect')
const {connect} = require("./routes/publisher");

let teachersRouter = require('./routes/teachers')
let studentsRouter = require('./routes/students')

connect()

console.log("ok5")

var app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const hostname = '127.0.0.1';
const port = 8080;

app.use(cors());

app.use('/teacher', teachersRouter)
app.use('/student', studentsRouter)

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})