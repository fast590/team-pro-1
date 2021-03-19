const mongoose = require('../services/mongoose').mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

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
        unique:true,
        minlength: 5
    },
    token:{
        type:String
    },
    role: {
        type:Number,
        default:0
    }

}, {
    collection: "userLists",
});

userSchema.pre('save', function(next) {
    var user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)

                user.password = hash
                next()
            });
        });
    } else {
        next()
    }
})

userSchema.methods.comparePassword = function (plainPassword, cb) {
    bcrypt.compare(plainPassword, this.password, (err, isMached) => {
        if(err) return cb(err)
            cb(null, isMached)
    })
}

userSchema.methods.generateToken = function (cb) {
    var user = this
    var token = jwt.sign(user._id.toHexString(), "secretToken")

    user.token = token
    user.save((err, user) => {
        if(err) return cb(err)
        cb(null,user)
    })
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;
    jwt.verify(token,'secretToken', (err, decoded) => {
        
        user.findOne({"_id": decoded, "token": token}, (err, user) => {
            if(err) return cb(err)
            cb(null, user)
        })
    })
}

module.exports = mongoose.model("userSchema", userSchema);