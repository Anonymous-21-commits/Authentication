const transport = require("../config/mailConfig");
const {api_key} = require("../config/serverConfig");
const Verifier = require('email-verifier');
const sendMail = (mail) => {
    try {
        transport.sendMail({
            from: 'admin@gmail.com',
            to: mail,
            subject: 'verification'
        })
    } catch (err) {
        throw err;
    }
}
module.exports = {
    sendMail,
};
