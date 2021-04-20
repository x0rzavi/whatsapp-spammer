const { Client } = require("whatsapp-web.js");
const express = require("express");
const config = require("./config");

const app = express();
const client = new Client({
  puppeteer: { headless: true, args: ["--no-sandbox"] },
  session: config.session,
});

function makeid(length) {
  var result = [];
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function secondsToTime(e) {
  var h = Math.floor(e / 3600)
      .toString()
      .padStart(2, "0"),
    m = Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, "0"),
    s = Math.floor(e % 60)
      .toString()
      .padStart(2, "0");
  return h + ":" + m + ":" + s;
}

client.initialize();

client.on("auth_failure", (msg) => {
  console.error(
    "There is a problem to authenticate, kindly set the SESSION env variable again from app settings and restart the app dyno."
  );
});

client.on("ready", () => {
  console.log("Bot has been started successfully.");
});

client.on("message_create", async (msg) => {
  if (msg.fromMe) {
    if (msg.body.startsWith("!spam")) {
      var data = msg.body.split(" ");
      msg.delete(true);
      if (data.length >= 4) {
        if (data[1] != 1 && data[1] != 2 && data[1] != 3) {
          await client.sendMessage(
            msg.to,
            "_Syntax error detected! Try again._"
          );
        } else if (data[2] > 1000) {
          await client.sendMessage(
            msg.to,
            "_Oops! looks like you are trying to spam a lot!_ \
                  _Spamming *more than 1000* messages at a time isn't allowed to check abuse_ ;)"
          );
        } else {
          if (data[1] == 1) {
            var text_data = data.splice(3);
            var text_data = text_data.join(" ");
            var start = Date.now();
            for (i = 0; i < data[2]; i++) {
              await client.sendMessage(msg.to, text_data.toString());
              sleep(1200);
            }
            var end = Date.now();
            var time = (end - start) / 1000;
            console.log("Spammed", data[2], "times successfully");
            await client.sendMessage(
              msg.to,
              "_Spammed *" +
                data[2] +
                "* times successfully in *" +
                secondsToTime(time) +
                "*_"
            );
          } else if (data[1] == 2) {
            if (isNaN(data[3])) {
              await client.sendMessage(
                msg.to,
                "_Syntax error detected! Try again._"
              );
            } else {
              var start = Date.now();
              for (i = 0; i < data[2]; i++) {
                await client.sendMessage(
                  msg.to,
                  Math.floor(Math.random() * data[3] + 1).toString()
                );
                sleep(1200);
              }
              var end = Date.now();
              var time = (end - start) / 1000;
              console.log("Spammed", data[2], "times successfully");
              await client.sendMessage(
                msg.to,
                "_Spammed *" +
                  data[2] +
                  "* times successfully in *" +
                  secondsToTime(time) +
                  "*_"
              );
            }
          } else if (data[1] == 3) {
            if (isNaN(data[3])) {
              await client.sendMessage(
                msg.to,
                "_Syntax error detected! Try again._"
              );
            } else {
              var start = Date.now();
              for (i = 0; i < data[2]; i++) {
                await client.sendMessage(msg.to, makeid(data[3]));
                sleep(1200);
              }
              var end = Date.now();
              var time = (end - start) / 1000;
              console.log("Spammed", data[2], "times successfully");
              await client.sendMessage(
                msg.to,
                "_Spammed *" +
                  data[2] +
                  "* times successfully in *" +
                  secondsToTime(time) +
                  "*_"
              );
            }
          }
        }
      } else {
        await client.sendMessage(
          msg.to,
          "_Not enough arguments supplied! Try again._"
        );
      }
    } else if (msg.body == "!help") {
      msg.delete(true);
      await msg.reply(
        "_Spam syntaxes are as follows:_\n\n \
_*TYPE1:*_  ```!spam 1 <times> <text_to_spam>```\n \
_*TYPE2:*_  ```!spam 2 <times> <random_no_digit_length>```\n \
_*TYPE3:*_  ```!spam 3 <times> <random_alphanumeric_char_length>```\n\n \
_*WhatsApp Spammer by X0rzAvi*_\n_*v2.0.0*_"
      );
    }
  }
});

client.on("disconnected", (reason) => {
  console.log("Client was logged out.", reason);
});

app.get("/", (req, res) => {
  res.send(
    '<h1 align="center"><tt>This server is powered by <a href="https://github.com/x0rzavi/whatsapp-spammer">whatsapp-spammer</a><br>By <a href="https://github.com/x0rzavi">X0rzAvi</a></tt></h1>'
  );
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening at Port: ${process.env.PORT || 8080}`);
});
