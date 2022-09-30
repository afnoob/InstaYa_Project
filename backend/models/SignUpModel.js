const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    Name:{
        type:String,
    },
    LastName:{
        type:String,
    },
    User:{
        type:String,
    },
    Password:{
        type:String,
    },
    Email:{
        type:String,
    }
});

module.exports = mongoose.model('user', signUpTemplate)