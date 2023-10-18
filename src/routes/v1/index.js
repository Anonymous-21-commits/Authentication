const {isAuthenticated, signIn, createUser} = require('../../controllers/userController');
const {validatePassword, validateMail} = require('../../middlewares/validate');
const express = require('express');
const router = express.Router();
router.post('/create', validateMail, validatePassword, createUser);
router.post('/signIn', signIn);
router.get('/isAuthenticated', isAuthenticated);
module.exports = router;