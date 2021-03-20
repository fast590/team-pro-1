const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookiePaser = require('cookie-parser');
const cors = require('cors');
const PORT = 4000;
const userModel = require('./model/user');
const {auth} = require('./middleware/auth');

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookiePaser());

app.get('/', (req, res) => {
    res.send("My application")
})

app.post('/api/users/signup', (req, res) => {
    const user = new userModel(req.body);
    user.save((err, doc) => {
        if(err) return res.json({success:false, err});
        return res.status(200).json({
            success:true
        });
    })
})

app.post('/api/users/signin', (req, res) => {
    const logInfo = req.body;
    const query = { email: logInfo.email };
    userModel.findOne(query, (err, user) => {
        if(!user) {
            res.json({
                success:false,
                message:"User doesn't exist"
            })
        } else {
            user.comparePassword(logInfo.password, (err, isMached) => {
                if(!isMached) 
                    res.json({success:false,message:"Password doesn't matched"})
                
                user.generateToken((err, user) =>{
                    if(err) res.status(400).send(err);

                    res.cookie("x_auth", user.token, { httpOnly: false, secure: false })
                    .status(200)
                    .json({success:true, userId:user._id})
                })
            })
        }
    })
})

app.get('/api/users/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? true : false,
        name: req.user.name,
        email:req.user.email,
        isToken:true,
        role:req.user.role
    })
})

app.get('/api/users/logout', auth, (req, res) => {
    userModel.findOneAndUpdate({"_id":req.user._id}, {"token":""}, (err, user) => {
        if(err) return res.json({success:false, err})
        res.status(200).send({success:true})
    })
})


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

