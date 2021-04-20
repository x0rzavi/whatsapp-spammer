// Add values if you are not using env vars
const fs = require('fs');

module.exports = {
    session: JSON.parse(process.env.SESSION || fs.readFileSync(__dirname + '/session.json', { encoding: 'utf8' })), //if not using env vars create a file named session.json
    contact: process.env.CONTACT || "911234567890@c.us",
}
