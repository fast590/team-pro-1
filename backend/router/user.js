const express = require('express')
const app = express()
const router = express.Router();
const userModel = require('../model/user');
const dbupdate = require('../middleware/updatedb')
const auth = require('../middleware/auth');
const nodemailer = require('nodemailer');

router.post('/signin', (req, res) => {
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
                if(!isMached) {
                    res.json({
                        success:false,
                        message:"Password doesn't matched"
                    })
                    console.log("password doesnt match")
                } else {
                    user.generateToken((err, user) =>{
                        if(err) res.status(400).send(err);
                        res.cookie("x_auth", user.token, { httpOnly: false, secure: false })
                        .status(200)
                        .json({success:true, userId:user._id})
                    })
                }
            })
        }
    })
})
router.post('/signup', (req, res) => {
    const user = new userModel(req.body);
    user.save((err, doc) => {
        if(err) return res.json({success:false, err});
        return res.status(200).json({
            success:true
        });
    })
})
router.post('/editpro',dbupdate, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? true : false,
        name: req.user.name,
        email:req.user.email,
        isToken:true,
        isAuth:true,
    })
})
router.post('/resetpass', (req,res) => {
    const query = { email: req.body.email };
    
    userModel.findOne(query, (err, user) => {
        if(!user) {
            res.json({
                success:false,
                message:"Doesn't have an account"
            })
        } else {
            const transporter = nodemailer.createTransport({
                service:'gmail',
                logger: true,
                debug: true,
                secure: false,
                auth:{
                    user: 'develope0407@gmail.com',
                    password:'qdccuhruwebdnfsu'
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            const mailOptions  = {
                from:'develope0407@gmail.com',
                to:'ryanstemkoski001@gmail.com',
                subject:"New Password",
                text:"123"
            }
            
            transporter.sendMail(mailOptions, function(error, info){
                if(error) {
                    console.log("err: ", error)
                    res.send({success:false, message:"Check your email"})
                } else{
                    console.log('Email sent: ' + info.response);
                    res.send({success:true, message:"Check your email"})
                }
            })
        }
    })
}) 
router.get('/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? true : false,
        name: req.user.name,
        email:req.user.email,
        isToken:true,
        isAuth:true
    })
})
router.get('/logout', auth, (req, res) => {
    userModel.findOneAndUpdate({"_id":req.user._id}, {"token":""}, (err, user) => {
        if(err) return res.json({success:false, err})
        res.status(200).send({success:true})
    })
})

module.exports = router