const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const md5 = require('md5');
const PORT = 4000;
const userModel = require('./model/user');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("My application")
})

app.post('/signup', (req, res) => {
    const newUser = req.body;
    const query = { email: newUser.email };
    userModel.findOne(query, (err, user) => {
        if (!user) {
            userModel.insertMany(newUser);
            res.send(newUser)
        }
        else {
            return res.json({
                success: false
            })
        }
    })
})
app.post('/signin', (req, res) => {
    const logInfo = req.body;
    const query = { email: logInfo.email };
    userModel.findOne(query, function (err, user) {
        if (user) {
            const compare = md5(req.body.password) == user.password
            if (compare) {
                var login = true;
                var message = user.name;
            } else {
                var login = false;
                var message = "Invailed Password";

            }
        } else {
            var login = false;
            var message = "Email doesn't exit"
        }
        return res.json({
            success: login,
            response: message
        })
    })
})
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

