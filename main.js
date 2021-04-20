const { Client, MessageMedia } = require("whatsapp-web.js");
const express = require("express");
const config = require("./config");
const { query } = require("express");

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const app = express();
const client = new Client({
  puppeteer: { executablePath: '/usr/bin/google-chrome' },
  session: config.session,
  ffmpegPath: '/usr/bin/ffmpeg'
});

client.initialize();

client.on("auth_failure", (msg) => {
  console.error(
    "There is a problem to authenticate, kindly set the SESSION env variable again from app settings and restart the app dyno."
  );
});

client.on("ready", () => {
  console.log("Bot has been started successfully.");
});

client.on('message_create', async (msg) => {
  if (msg.fromMe) {
    if (msg.body.startsWith("!spam")) {
      msg.delete(true)
      var finalMsg = msg.body.replace("!spam", "")
      var quotedMsg = await msg.getQuotedMessage()
      var attachmentData = await quotedMsg.downloadMedia();
      for (i = 0; i < finalMsg; i++) {
        await client.sendMessage(msg.to, new MessageMedia(attachmentData.mimetype, attachmentData.data, attachmentData.filename), { sendMediaAsSticker: true })
        sleep(500)
      }
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
