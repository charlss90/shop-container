#!/usr/bin/env node

const amqp = require('amqplib/callback_api')
const async = require('async');
const URL = 'amqp://guest:guest@localhost:5672';

var times = new Array(30);

const queue = {
    name: 'hello',
    options: {
        durable: false
    }
}

const sendMessage = (conn, index, next) => {
    conn.createChannel((err, channel) => {
        let message = `Daddy index: ${index}`
        channel.assertQueue(queue.name, queue.options)
        channel.sendToQueue(queue.name, new Buffer(message))
        console.log(message)
        next()
    })
}

amqp.connect(URL, (err, conn) => {
    if (err) throw err;

    conn.createChannel((err, channel) => {
        // let message = `Daddy index: ${index}`
        channel.assertQueue(queue.name, queue.options)

        async.eachOf(times, (time, index, next) => {
            let message = `Daddy index: ${index}`
            channel.sendToQueue(queue.name, new Buffer(message))
            console.log(message)
            next()
        }, () => {
            setTimeout(() => {
                conn.close();
                process.exit(0)
            }, 500);
        })

    })
})
