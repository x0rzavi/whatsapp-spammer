const express = require('express');
const app = express();
const { Client } = require('whatsapp-web.js');
const config = require('./config')

const client = new Client({ puppeteer: { headless: true, args: ['--no-sandbox'] }, session: config.session });

client.initialize();

client.on('auth_failure', msg => {
    console.error("There is a problem to authenticate, Kindly set the env var again and restart the app");
});

client.on('ready', () => {
    console.log('Bot has been started');
});

client.on('message_create', msg => {
    if (msg.fromMe) {
        if (msg.body.startsWith("!spam")) {
            var data = msg.body.split(" ")
            //console.log(data)
            msg.delete(true)
            console.time('Spammed in')
            for (i = 0; i < data[1]; i++) {
                //setTimeout(function () { client.sendMessage(msg.to, data[2]) }, 1000 * i);
                //client.sendMessage(msg.to, Math.floor((Math.random() * 10000) + 1).toString())
                client.sendMessage(msg.to, makeid(12))
            }
            console.timeEnd('Spammed in')
            console.log("Spammed" , data[1], "times successfully")
            client.sendMessage(msg.to, "Spammed " + data[1] + " times successfully")
        } else if (msg.body == '!help') {
            msg.reply("Spam syntax is   ```!spam <times>```")
        }
    }
});

client.on('disconnected', (reason) => {
    console.log('Client was logged out', reason);
});

app.get('/', (req, res) => {
    res.send('<h1>This server is powered by <br><a href="https://github.com/x0rzavi/whatsapp-spammer">whatsapp-spammer</a></h1>')
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server listening at Port: ${process.env.PORT || 8080}`)
})