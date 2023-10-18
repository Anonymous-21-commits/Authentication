const mongoose = require('mongoose');
const connect = async () => {
    await mongoose.connect('mongodb://localhost/auth');
}
module.exports = connect;