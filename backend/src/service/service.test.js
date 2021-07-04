const service = require('./service');



describe('Service', () => {
    it('getSumOfTwoNumber should return the plus of two numbers', () => {
        const num1 = 4;
        const num2 = 5.9;

        const result = service.getSumOfTwoNumber(num1, num2);

        expect(result).toBe('9.90');
    });

    it('getSubtractionOfTwoNumber should return the subtraction of two numbers', () => {
        const num1 = 10;
        const num2 = 3.9;

        const result = service.getSubtractionOfTwoNumber(num1, num2);

        expect(result).toBe('6.10');
    });

    it('getMultiplicationOfTwoNumber should return the result of two numbers multiply', () => {
        const num1 = 4;
        const num2 = 5;

        const result = service.getMultiplicationOfTwoNumber(num1, num2);

        expect(result).toBe('20.00');
    });

    it('getMultiplicationOfTwoNumber should return the result of two numbers multiply', () => {
        const num1 = 4;
        const num2 = 5;

        const result = service.getMultiplicationOfTwoNumber(num1, num2);

        expect(result).toBe('20.00');
    });

    it('getDivisionOfTwoNumber should return the result of two numbers divide', () => {
        const num1 = 56;
        const num2 = 8;

        const result = service.getDivisionOfTwoNumber(num1, num2);

        expect(result).toBe('7.00');
    });
})