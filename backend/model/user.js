const mongoose = require('../services/mongoose').mongoose;

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }

}, {
    collection: "userLists",
});

module.exports = mongoose.model("userSchema", userSchema);