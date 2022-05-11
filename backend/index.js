const express = require('express');
const cors = require('cors');
require('./models/connect')

let teachersRouter = require('./routes/teachers')
let studentsRouter = require('./routes/students')

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