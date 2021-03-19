
const userModel = require('../model/user');

var auth = (req, res, next) => {
    var token = req.cookies.x_auth;

    userModel.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) res.json({isAuth:false, error: true});

        req.token = token;
        req.user = user;
        
        next();
    })

}

module.exports = {auth}