const express = require('express');
const OrderValidator = require('../shared/order-validation');
const router = express.Router();

const orderList = [
    {
        id: 1,
        orderNumer: 43534,
        customerName: 'Chandan Kumar Y S'
    },
    {
        id: 2,
        orderNumer: 45434,
        customerName: 'Rajashree'
    }
];

// To get path parameters
router.get('/testPathParams/:id/:name', (req, res) => {

    res.send(req.params);

});

// To get query parameters
// ...api/order/testQueryParams/1/chandan?sortBy=name
router.get('/testQueryParams/:id', (req, res) => {

    res.send(req.query);

});

// To get order list
router.get('/getOrderList', (req, res) => {

    res.send(orderList);

});

// To get order by id
router.get('/getOrderById/:id', (req, res) => {

    const order = orderList.find(e => e.id === parseInt(req.params.id));
    if (!order) {
        res.status(404).send('Order not found.');
    }
    res.send(order);

});

// To add order
router.post('/addOrder', (req, res) => {

    const result = OrderValidator(req.body);

    if (result.error) {
        res.status(400).send(result.error);
        return;
    }

    const order = {
        id: orderList.length + 1,
        orderNumer: req.body.orderNumer,
        customerName: req.body.customerName
    }

    orderList.push(order);

    res.send(order);

});

// To update order
router.put('/updateOrder/:id', (req, res) => {

    const result = OrderValidator(req.body);

    if (result.error) {
        res.status(400).send(result.error);
        return;
    }

    const order = orderList.find(e => e.id === parseInt(req.params.id));

    if (!order) {
        res.status(404).send('Order not found');
        return;
    }

    order.orderNumer = req.body.orderNumer;
    order.customerName = req.body.customerName;

    return res.status(200).send(order);

});

// To delete order
router.delete('/deleteOrder/:id', (req, res) => {

    const order = orderList.find(e => e.id === parseInt(req.params.id));

    if (!order) {
        return res.status(404).send('Order not found');
    }

    const orderIndex = orderList.indexOf(order);
    orderList.splice(orderIndex, 1);

    return res.status(200).send(orderList);

});

module.exports = router;