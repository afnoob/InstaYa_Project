const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModel');

router.post('/signup', (request, response) =>{
    const signedUpUser = new signUpTemplateCopy({
        Name:request.body.Name,
        LastName:request.body.LastName,
        User:request.body.User,
        Password:request.body.Password,
        Email:request.body.Email
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
});

router.get('/sigin');

module.exports = router;