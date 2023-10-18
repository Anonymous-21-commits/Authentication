const validateEmail = (req, res, next) => {
    const mail = req.body.mail;
    if (!mail) return res.status(500).json({
        err: 'mail mandatory'
    })
    if (!String(mail)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) return res.status(500).json({
        err: 'invalid mail format'
    })
    next();
};
module.exports=validateEmail;