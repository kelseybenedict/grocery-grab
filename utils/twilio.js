require('dotenv').config();
var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
var twilio = require('twilio');
const { AlphaSenderContext } = require('twilio/lib/rest/messaging/v1/service/alphaSender');

const client = twilio(accountSid, authToken);
// include and call from wherever 
function sendText(recipient, message) { 
    // regex for phone number 
client.messages.create({
    body: message,
    to: recipient,  // Text this number
    from: '+16194856522', // From a valid Twilio number
})
console.log("message1:", message)
.then((message) => console.log("message: ",message.sid))
.catch(err => console.warn(err));
}
 
//sendText(phone, message);
module.exports = sendText;