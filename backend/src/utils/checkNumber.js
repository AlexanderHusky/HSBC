exports.checkNumberType = (num1, num2) => {
        
        if(isNaN(num1) || isNaN(num2)){
            return 'TRUE';
        }

        return [parseFloat(num1), parseFloat(num2)];
}