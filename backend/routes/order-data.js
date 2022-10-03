const {Order} = require('../models/OrderModel');
const express = require('express');
const router = express.Router();

router.get("/order-data/:author", async (request, response) =>{
    let author = request.params.author
    Order.find({"Author":author}).then(doc => {
        if (!doc) { return response.status(404).end();}
        return response.status(200).json(doc);
    })
    .catch(err => next(err));
});

module.exports = router