const userRepo = require("../repository/userRepo");
const jwt = require("jsonwebtoken");
const {JWT_KEY} = require("../config/serverConfig");
const {sendMail} = require('./mailService');

class UserService {
    constructor() {
        this.repo = new userRepo();
    }

    async createUser(user) {
        try {
            const storedUser = await this.repo.createUser(user);
            sendMail(storedUser.mail);
            return storedUser;
        } catch (err) {
            throw err;
        }
    }
    createToken = (user) => {
        try {
            return jwt.sign({mail: user.mail}, JWT_KEY, {expiresIn: '1h'});
        } catch (err) {
            console.log("error in token creation");
        }
    };
    verifyToken = (token) => {
        try {
            return jwt.verify(token, JWT_KEY);
        } catch (err) {
            console.log(err);
        }
    };

    async signIn(mail, password) {
        try {
            const storedUser = await this.repo.getByEmail(mail);
            if (!storedUser || !storedUser.comparePassword(password)) {
                throw {err: 'invalid sign in request'};
            }
            return this.createToken({mail: mail, password: password});
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async isAuthenticated(token) {
        try {
            const user = this.verifyToken(token);
            const storedUser = await this.repo.getByEmail(user.mail);
            if (!storedUser) {
                throw {err: 'user not registered'};
            }
            return user.mail;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

module.exports = UserService;