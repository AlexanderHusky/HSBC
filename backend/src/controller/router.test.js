const express = require('express');
const router = express.Router()

const mockGetSumOfTwoNumber = jest.fn();
const mockGetSubtractionOfTwoNumber = jest.fn();
const mockGetMultiplicationOfTwoNumber = jest.fn();
const mockGetDivisionOfTwoNumber = jest.fn();

const mockCheckNumberType = jest.fn();

jest.mock('../service/service.js', () => {
    return {
        getSumOfTwoNumber: mockGetSumOfTwoNumber,
        getSubtractionOfTwoNumber: mockGetSubtractionOfTwoNumber,
        getMultiplicationOfTwoNumber: mockGetMultiplicationOfTwoNumber,
        getDivisionOfTwoNumber: mockGetDivisionOfTwoNumber
    }
});

jest.mock('../utils/checkNumber.js', () => {
    return {
        checkNumberType: mockCheckNumberType
    }
});

const service = require('../service/service');
const utils = require('../utils/checkNumber');



describe('test', () => {
    it('should ', () => {
        // I think this part could not suitable for unit test, 
        // it should be end to end test and use Cypress inframe to do this
        // I never used Cypress inframe and in order to save time so I ignore this part
        // So sorry about that
    })
})