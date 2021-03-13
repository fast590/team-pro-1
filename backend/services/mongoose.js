const mongoose = require('mongoose')
const config_mongo = require('../config/key');

const mongoUri = config_mongo.mongoUri;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

const connectWithRetry = () => {
    mongoose
        .connect(mongoUri, options)
        .then(() => console.log('MongoDB connected...'))
        .catch(error => console.log(error))

    // setTimeout(connectWithRetry, 5000);
}

connectWithRetry();

exports.mongoose = mongoose;