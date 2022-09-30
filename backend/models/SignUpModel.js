const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    User:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('user', signUpTemplate)