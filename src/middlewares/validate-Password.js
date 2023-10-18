const validatePassword = (req, res, next) => {
    const password = req.body.password;
    if (!password) return res.status(500).json({
        success: false,
        err: 'password is mandatory'
    })
    if (password.length < 8) {
        return res.status(500).json({
            success: false,
            err: 'password length atleast 8 is needed'
        })
    }
    next();
}
module.exports=validatePassword;