const express = require("express");
const app = express();
const apiRoutes = require('./routes/index');
const sendMail = require('./services/mailService');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const connect = require('./config/db');
app.use('/api', apiRoutes);
app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('mongodb connected');
});