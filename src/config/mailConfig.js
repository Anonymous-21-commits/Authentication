require('dotenv').config();
const nodemailer = require('nodemailer');
const {user, password} = require('./serverConfig');
const transport = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:user,
        pass: password
    }
})
module.exports = transport;