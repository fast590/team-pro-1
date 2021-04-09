require('dotenv').config();
const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
const cookieParser   = require('cookie-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const PORT = 4000;
const userModel = require('./model/user');
const auth = require('./middleware/auth');
const dbupdate = require('./middleware/updatedb')

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser());

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
app.post('/api/users/editpro',dbupdate, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? true : false,
        name: req.user.name,
        email:req.user.email,
        isToken:true,
        isAuth:true,
    })
})

app.post('/api/users/resetpass', (req,res) => {
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

app.post('/api/products/list', (req, res) => {
    var options = {
        'method': 'GET',
        'url': 'https://store.kandykoi.com/wp-json/wc/v3/products',
        'headers': {
            'Authorization': 'Basic Y2tfMzdhNTU2NjZmMTU1N2JiYmZiZjM0ZTBkNDc2NTBkNTQxODAyYzk5YTpjc19mOWM2MThlNGE1ZjIyNWY3YTVkOGNlN2U0NjFjNzM0ZjNlNjQ5MGFi'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        let product = JSON.parse(response.body)
        res.json({success:true, data:product})
      });
})
app.post('/api/products/update', (req, res) =>{
    
    const data = {
        'name':req.body.name,
        'sku':req.body.sku,
        'regular_price':req.body.price
    }
    const url = 'https://store.kandykoi.com/wp-json/wc/v3/products/'+req.body.id;
 
    var options = {
        'method': 'POST',
        'url': url,
        'headers': {
            'Authorization': 'Basic Y2tfMzdhNTU2NjZmMTU1N2JiYmZiZjM0ZTBkNDc2NTBkNTQxODAyYzk5YTpjc19mOWM2MThlNGE1ZjIyNWY3YTVkOGNlN2U0NjFjNzM0ZjNlNjQ5MGFi'
        },
        formData: data
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        res.json({success:true, data:response})
      });
})
app.post('/api/products/delete', (req, res) =>{
    
    const url = 'https://store.kandykoi.com/wp-json/wc/v3/products/'+req.body.id;
    var options = {
        'method': 'DELETE',
        'url': url,
        'headers': {
            'Authorization': 'Basic Y2tfMzdhNTU2NjZmMTU1N2JiYmZiZjM0ZTBkNDc2NTBkNTQxODAyYzk5YTpjc19mOWM2MThlNGE1ZjIyNWY3YTVkOGNlN2U0NjFjNzM0ZjNlNjQ5MGFi'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        res.json({success:true, data:response})
      });
})


app.get('/api/users/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? true : false,
        name: req.user.name,
        email:req.user.email,
        isToken:true,
        isAuth:true
    })
})

app.get('/api/users/logout', auth, (req, res) => {
    userModel.findOneAndUpdate({"_id":req.user._id}, {"token":""}, (err, user) => {
        if(err) return res.json({success:false, err})
        res.status(200).send({success:true})
    })
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))


