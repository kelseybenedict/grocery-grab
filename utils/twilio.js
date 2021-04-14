require('dotenv').config();
var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
var twilio = require('twilio');
const { AlphaSenderContext } = require('twilio/lib/rest/messaging/v1/service/alphaSender');

const client = twilio(accountSid, authToken);
//const id = ;
// include and call from wherever 
const message = await fetch(`/api/projects/${id}`, {
    method: 'GET',
    body: JSON.stringify({})
})
// async await
// query selector is the id lauren created for phone number -- this needs to get updated 
const phone = document.querySelector('#project-name').value.trim();
function sendText(recipient, message) { 
    // regex for phone number 
client.messages.create({
    body: message,
    to: recipient,  // Text this number
    from: '+16194856522', // From a valid Twilio number
})
.then((message) => console.log("message: ",message.sid))
.catch(err => console.warn(err));
}
 
sendText(phone, message);
//module.exports = sendText;