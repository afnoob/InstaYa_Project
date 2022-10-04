const {Order} = require('../models/OrderModel');
const express = require('express');
const router = express.Router();

router.get("/actualizar-orden/:item_tracing", async (request, response) =>{
    let tracing = request.params.item_tracing;
    Order.findOne({"Tracing":tracing}).then(doc => {
        if (!doc) { return response.status(404).end();}
        return response.status(200).json(doc);
    })
        .catch(err => next(err));
});

module.exports = router
