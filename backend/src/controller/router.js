const express = require('express');
const router = express.Router()
const service = require('../service/service');
const utils = require('../utils/checkNumber');

const list = [];

router.post('/sum', (req, res) => {
    const { num1, num2 } = req.body;
    const numberCheckResult = utils.checkNumberType(num1, num2);

    if(numberCheckResult == 'TRUE') {
        res.send({ result: 'please input number'});
        return;
    } 

    const result = service.getSumOfTwoNumber(numberCheckResult[0], numberCheckResult[1]);
    res.send({ result });
});

router.post('/subtraction', (req, res) => {
    const { num1, num2 } = req.body;
    const numberCheckResult = utils.checkNumberType(num1, num2);

    if(numberCheckResult == 'TRUE') {
        res.send({ result: 'please input number' });
        return;
    }

    const result = service.getSubtractionOfTwoNumber(num1, num2);
    res.send({ result });
});

router.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const numberCheckResult = utils.checkNumberType(num1, num2);

    if (numberCheckResult == 'TRUE') {
        res.send({ result: 'please input number' });
        return;
    }

    const result = service.getMultiplicationOfTwoNumber(num1, num2);
    res.send({ result });
});

router.post('/division', (req, res) => {
    const { num1, num2 } = req.body;
    const numberCheckResult = utils.checkNumberType(num1, num2);

    if (numberCheckResult == 'TRUE') {
        res.send({ result: 'please input number' });
        return;
    }

    const result = service.getDivisionOfTwoNumber(num1, num2);
    res.send({ result });
});

router.get('/history', (req, res) => {
    const history = service.getHistory();
    res.send(history);
})


module.exports = router;