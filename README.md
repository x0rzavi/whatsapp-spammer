<h1 align="center"><tt>WhatsApp Spammer</tt></h1><br>

### Disclaimer :
<code>Since this project interacts via WhatsApp Web so there is a bare minimum 
chance of getting banned by WhatsApp. Yet again I hereby declare that I shall 
NOT be held responsible if your account gets banned. After all we are talking 
about spamming here and using automation bots is strictly against WhatsApp's policies. 
So, I highly recommended you NOT to spam numbers which aren't in your contact 
list and apply a little amount of brain by not spamming when your friend is pissed
already.</code><br><br>
<code>Furthermore, the code has been heavily obfuscated in an effort to prevent
abuse by altering the limiting internal parameters of the program. However, you
can request to audit the code anytime by contacting below.</code><br>

### Requirements :
- A PC with Nodejs installed.
- An account on Heroku.
- An account on cron-job.org.
- A little amount of time and brain.

### Deploy :
[![Deploy with Heroku](https://www.herokucdn.com/deploy/button.svg "Deploy with Heroku")](https://heroku.com/deploy?template=https://github.com/x0rzavi/whatsapp-spammer "Deploy with Heroku")<br>

### Details on Deploying :
- Signup (its free) or login into [Heroku](https://www.heroku.com/ "Heroku")
- Download the file (or create a file) named (with the content from) [```genToken.js```](https://github.com/x0rzavi/whatsapp-spammer/blob/453dac2015cdb32ec75b9dea7c5549da314e5c4d/genToken.js "genToken.js") on your PC.
- Make sure your have [Nodejs](https://nodejs.org/ "Nodejs") downloaded and installed.
- Open up a terminal and run ```npm i qrcode-terminal whatsapp-web.js``` to install required dependencies.
- Upon completion, run ```node full_path_to_genToken.js``` in your terminal to generate the session token.
- Click the above _Deploy with Heroku_ button.
- Next copy the entire JSON string generated and paste it in the ```SESSION``` field in heroku.
- Give your app a name, choose a region and then Deploy.
- Wait for a few minutes for the process to complete.
- The spammer is now running and listening for your commands.
- NOTE: you will need to restart the bot if you try to open any other WhatsApp Web instance as that results in a ```CONFLICT```.
- To restart, open your app from heroku dashboard, tap on _More_ and then _Restart all dynos_.<br>

### Additional notes and steps :
- This app will need a cron job to keep it alive, so follow these steps.
- Signup on [cron-job.org](https://cron-job.org "cron-job.org") (its free).
- After that click *cronjobs* in the navigation header & click *Create Cronjob*.
- Give your heroku app url (the url which opens when you click *Open app* in heroku dashboard).
- Schedule it to every 15 minutes.
- Everything else will be the default.
- Click *Create Cronjob* to create a cron job.<br>

### Commands :
Send <code>!help</code> anywhere in your chats to learn the basic spam syntax.<br>

### How it works :
- Opens headless WhatsApp Web session in server using puppeteer.
- Listen to your commands and take action.<br>

### Credits :
- [Whatsapp Web JS](https://github.com/pedroslopez/whatsapp-web.js/ "Whatsapp Web JS") - This project is fully dependent on this library
- [Whatsbot](https://github.com/TheWhatsBot/WhatsBot/ "Whatsbot") - This project has referenced the repo for configuring Heroku and keep alive mechanism.<br>

### License & Copyright :
- This Project is [Apache-2.0](https://github.com/TheWhatsBot/WhatsBot/blob/main/LICENSE) Licensed
- Copyright 2021 by [Avishek Sen](https://github.com/x0rzavi)
- Copyright 2021 by [Tuhin Kanti Pal](https://github.com/cachecleanerjeet)<br>

### Contact :
- [Telegram](https://telegram.dog/mishizu)
