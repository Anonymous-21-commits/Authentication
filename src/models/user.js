const mongoose = require('mongoose');
const {SALT} = require('../config/serverConfig');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    }
}, {timestamps: true});

userSchema.pre('save', async function (next) {
    const user = this;
    user.password = bcrypt.hashSync(user.password, SALT);
    next();
})
userSchema.methods.comparePassword = function (plainPassword) {
    return bcrypt.compareSync(plainPassword, this.password);
};
const User = mongoose.model('User', userSchema);
module.exports = User;