require('dotenv').config();
const bcrypt = require('bcrypt');
const PORT = process.env.PORT;
const SALT = bcrypt.genSaltSync(parseInt(process.env.saltRounds, 10));
const JWT_KEY = process.env.JWT_KEY;
module.exports = {
    PORT: PORT,
    SALT: SALT,
    JWT_KEY: JWT_KEY,
    user:process.env.user,
    password:process.env.password,
    api_key:process.env.api_key
};
