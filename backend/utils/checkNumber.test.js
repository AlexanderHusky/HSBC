const checkNumber = require('./checkNumber');

describe('CheckNumber utils', () => {
    it('should return input error when any input is not number', () => {

        const input1 = 4;
        const input2 = 'HSBC'

        const result1 = checkNumber.checkNumberType(input1, input2);
        const result2 = checkNumber.checkNumberType(input2, input1);

        expect(result1).toBe('TRUE');
        expect(result2).toBe('TRUE');
    });
    
    it('should return float number list when input is all number', () => {
        const num1 = 5;
        const num2 = 10.8;

        const result = checkNumber.checkNumberType(num1, num2);

        expect(result[0]).toBe(parseFloat(num1));
        expect(result[1]).toBe(parseFloat(num2));
    })
})