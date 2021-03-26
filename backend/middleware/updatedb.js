const userModel = require('../model/user');

let dbupdate = (req, res, next) => {
    var token = req.cookies.x_auth;
    var userData  = req.body;
    console.log(token)
    console.log(userData)
    userModel.findUserAndUpdate(token, userData, (err, user) => {
        if(err) throw err;
        if(!user) res.json({isAuth:false, error: true});

        req.token = token;
        req.user = user;
        next();
    })

}

module.exports = dbupdate