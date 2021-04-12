const express = require('express');
const app = express();
const { Client } = require('whatsapp-web.js');
const config = require('./config')

const client = new Client({ puppeteer: { headless: true, args: ['--no-sandbox'] }, session: config.session });

function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
   }
   return result.join('');
}

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
            msg.delete(true)
            if (data[1] == 1) {
                for (i = 0; i < data[2]; i++) {
                    setTimeout(function () { client.sendMessage(msg.to, data[3].toString()) }, 500 * i);
                }
            } else if (data[1] == 2) {
                for (i = 0; i < data[2]; i++) {
                    setTimeout(function () { client.sendMessage(msg.to, Math.floor((Math.random() * data[3]) + 1).toString()) }, 500 * i);
                }
            } else if (data[1] == 3) {
                for (i = 0; i < data[2]; i++) {
                    setTimeout(function () { client.sendMessage(msg.to, makeid(data[3])) }, 500 * i);
                }
            }
            console.log("Spammed" , data[2], "times successfully")
            client.sendMessage(msg.to, "Spammed " + data[2] + " times successfully")
        } else if (msg.body == '!help') {
            msg.reply("Spam syntaxes are as follows:\n\n \
*TYPE1:*  ```!spam 1 <times> <text_to_spam>```\n \
*TYPE2:*  ```!spam 2 <times> <random_no_digit_length>```\n \
*TYPE3:*  ```!spam 3 <times> <random_alphanumeric_char_length>```\n")
        }
    }
});

client.on('disconnected', (reason) => {
    console.log('Client was logged out', reason);
});

app.get('/', (req, res) => {
    res.send('<h1 align="center"><tt>This server is powered by <a href="https://github.com/x0rzavi/whatsapp-spammer">whatsapp-spammer</a><br>By <a href="https://github.com/x0rzavi">X0rzAvi</a></tt></h1>')
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server listening at Port: ${process.env.PORT || 8080}`)
})
