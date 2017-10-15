#!/usr/bin/env node

// docker run -d --hostname my-rabbit --name some-v2-rabbit -p 8080:15672 -p 5672:5672 rabbitmq:3-management

const amqp = require('amqplib/callback_api')
const URL = 'amqp://guest:guest@localhost:5672';

const queue = {
    name: 'hello',
    options: {
        durable: false
    },
    receiveOpts: {
        noAck: true
    }
}

amqp.connect(URL, (err, conn) => {
    if (err) throw err;

    conn.createChannel((err, channel) => {

        channel.consume(queue.name, (message) => {
            let {content} = message
            console.log(`[receive.js] Recibimos ${content.toString()}`)
            // setTimeout(function() { conn.close(); process.exit(0) }, 500);
        }, queue.receiveOpts)
    })
})
