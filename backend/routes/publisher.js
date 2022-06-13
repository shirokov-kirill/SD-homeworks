const amqp = require('amqplib');
let connection, channel

const connect = async () => {
    try {
        console.log("ok1")
        connection = await amqp.connect('amqp://localhost:5672')
        console.log("ok2")
        channel = await connection.createChannel()
        console.log("ok3")
        await channel.assertQueue("checkers")
        console.log("ok4")
        await channel.assertQueue("tasks")
    } catch (ex){
        console.log(ex)
    }
}

const publish = async (queue, data) => {
    try {
        await channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)))
    } catch (ex){
        console.log(ex)
    }
}

const disconnect = async () => {
    await channel.close()
    await connection.close()
}

module.exports = {connect, publish, disconnect}