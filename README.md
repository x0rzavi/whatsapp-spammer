<h1 align="center"><tt>WhatsApp Spammer</tt></h1><br>

### Deploy :
[![Deploy with Heroku](https://www.herokucdn.com/deploy/button.svg "Deploy with Heroku")](https://heroku.com/deploy?template=https://github.com/x0rzavi/whatsapp-spammer "Deploy with Heroku")<br>

### Details on Deploying:
- Signup or login into [Heroku](https://www.heroku.com/ "Heroku")
- Download the file (or create a file) named ```genToken.js``` on your PC.
- Make sure your have [Nodejs](https://nodejs.org/ "Nodejs") downloaded and installed.
- Open up a terminal and run ```npm i qrcode-terminal whatsapp-web.js``` to install required dependencies.
- Upon completion run ```node genToken.js``` to generate the session token.
- Copy the entire string generated and paste it in the ```SESSION``` field in heroku.
- Give your app a name, choose a region and then Deploy.

### Commands :
*Send <code>!help</code> anywhere in your chats to learn the basic syntax.*

### How it works :
- Opens headless WhatsApp Web session in server using puppeteer.
- Listen to your commands and take action.

### Credits :
- [Whatsapp Web JS](https://github.com/pedroslopez/whatsapp-web.js/ "Whatsapp Web JS") - This project is fully dependent on this library
- [Whatsbot](https://github.com/TheWhatsBot/WhatsBot/ "Whatsbot") - This project has referenced the repo for configuring Heroku

### License & Copyright :
- This Project is [Apache-2.0](https://github.com/TheWhatsBot/WhatsBot/blob/main/LICENSE) Licensed
- Copyright 2021 by [Avishek Sen](https://github.com/x0rzavi)

### Connect :
- [Telegram](https://telegram.dog/mishizu)
