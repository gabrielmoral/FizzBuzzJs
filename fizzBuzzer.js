var fizzBuzzer = function(){
    
    this.until = function (number) {
        
        var outputSeparator = " ";
        var output = [];
        
        for (var currentNumber = 1; currentNumber <= number; currentNumber++) {
            output.push(calculateOutput(currentNumber));
        }
        
        return output.join(outputSeparator);
    };
    
    var calculateOutput = function (number) {
        if (isMultipleOfFive(number) && isMultipleOfThree(number)) {
            return "FizzBuzz";
        }           
        else if (isMultipleOfFive(number)) {
            return "Buzz";
        }
        else if (isMultipleOfThree(number)) {
            return "Fizz";
        }
        else { 
            return number.toString();
        }
    };
    
    var isMultipleOfFive = function(number) {
        return number % 5 == 0;
    };
    
    var isMultipleOfThree = function(number) {
        return number % 3 == 0;
    };
};


module.exports = fizzBuzzer;