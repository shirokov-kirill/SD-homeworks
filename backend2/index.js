const amqp = require('amqplib')
const Homeworks = require('./models/homework')
const Hometasks = require('./models/hometask')
const Checkers = require('./models/checker')
require('./models/connect');

const receive1 = async () => {
    let connection
    try {
        connection = await amqp.connect('amqp://localhost:5672')
        const channel = await connection.createChannel()
        await channel.assertQueue("checkers")
        channel.consume("checkers", message => {
            const json = JSON.parse(message.content.toString())
            const name = json.name
            const date = json.date
            const description = json.description
            const expirationDate = json.expirationDate
            const checker = json.checker

            Hometasks.find({}, (err, docs) => {
                const len = docs.length
                Hometasks.create({
                    'id': len,
                    'name': name,
                    'date': new Date(date),
                    'task': description,
                    'expirationDate': new Date(expirationDate)
                }, (err, doc) => {
                    console.log(doc)
                    console.log(err)
                    if (err) {
                        return
                    }

                    Checkers.create({
                        'taskId': len,
                        'checker': checker
                    }, (err, doc) => {
                        if (err === null) {
                            channel.ack(message)
                        }
                    })
                })
            })
        })
    } catch (ex){
        console.log(ex)
    }
}

const receive2 = async () => {
    let connection
    try {
        connection = await amqp.connect('amqp://localhost:5672')
        const channel = await connection.createChannel()
        await channel.assertQueue("tasks")
        channel.consume("tasks", message => {
            console.log(message.content.toString())
            channel.ack(message)
            //const json = JSON.stringify(message.content.toString())
            //const taskId = json.taskId
            //const textAnswer = json.text
            //const date = new Date()
            //Checkers.findOne({'taskId': taskId}, (err, doc) => {
                //if(err){
                    //return
                //}

                //const f = new Function(doc.checker);
                //const result = f.apply({answer: textAnswer, date: date})
                //const mark = result.result
                //const comments = result.comments
                //Homeworks.updateOne({'id': json.attemptId}, {'status': {'mark': mark, 'comments': comments, 'status': "Checked"}}, (err, doc) => {
                    //console.log(err)
                    //console.log(doc)
                    //channel.ack(message)
                //})
            //})
        })
    } catch (ex){
        console.log(ex)
    }
}

const receive1proc = async () => {
    while (true){
        await receive1()
    }
}

const receive2proc = async () => {
    while (true){
        await receive2()
    }
}

receive1().then(( mes) => {}, (err) => {console.log(err)})
receive2().then(( mes) => {}, (err) => {console.log(err)})