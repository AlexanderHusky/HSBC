const getExpresstion = (num1, num2, symbol, result) => {
    return `${num1} ${symbol} ${num2} = ${result}`
}
exports.getSumOfTwoNumber = (num1, num2) => {
    const result = num1 + num2;
    const expression = getExpresstion(num1, num2, '+', result)
    this.list.push(expression);
    return result.toFixed(2);
}

exports.getSubtractionOfTwoNumber = (num1, num2) => {
    const result = (num1 - num2).toFixed(2);
    const expression = getExpresstion(num1, num2, '-', result);
    this.list.push(expression);
    return result;
}

exports.getMultiplicationOfTwoNumber = (num1, num2) => {
    const result = (num1 * num2).toFixed(2);
    const expression = getExpresstion(num1, num2, '*', result);
    this.list.push(expression);
    return result;
}

exports.getDivisionOfTwoNumber = (num1, num2) => {
    const result = (num1 / num2).toFixed(2);
    const expression = getExpresstion(num1, num2, '÷', result);
    this.list.push(expression);
    return result;
}

exports.getHistory = () => {
    return this.list
}

exports.list = [];
