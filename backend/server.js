const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
const cookieParser   = require('cookie-parser');
const cors = require('cors');
const PORT = 4000;
const user = require('./router/user')
const product = require('./router/product')

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser());

app.use('/api/users', user)
app.use('/api/products', product)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))


