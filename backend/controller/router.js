const fs = require('fs');
const express = require('express');
const router = express.Router()
const service = require('../service/service');

const list = [];

router.post('/sum', (req, res) => {
    const { num1, num2 } = req.body;
    const result = service.getSumOfTwoNumber(num1, num2);
    res.send({ result });
});

router.post('/subtraction', (req, res) => {
    const { num1, num2 } = req.body;
    const result = service.getSubtractionOfTwoNumber(num1, num2);
    res.send({ result });
});

router.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const result = service.getMultiplicationOfTwoNumber(num1, num2);
    res.send({ result });
});

router.post('/division', (req, res) => {
    const { num1, num2 } = req.body;
    const result = service.getDivisionOfTwoNumber(num1, num2);
    console.log('this is ', + result);
    res.send({ result });
});

router.get('/history', (req, res) => {
    const history = service.getHistory();
    res.send(history);
})


module.exports = router;