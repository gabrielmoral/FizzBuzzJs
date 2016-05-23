var fizzBuzzer = function(){
    
    this.until = function (number) {
        
        var outputSeparator = " ";
        var output = [];
        
        for (var currentNumber = 1; currentNumber <= number; currentNumber++) {
              
            if (isMultipleOfFive(currentNumber) && isMultipleOfThree(currentNumber)) {
                output.push("FizzBuzz");
            }           
            else if (isMultipleOfFive(currentNumber)) {
                output.push("Buzz");
            }
            else if (isMultipleOfThree(currentNumber)) {
                output.push("Fizz");
            }
            else { 
                output.push(currentNumber.toString());
            }
        }
        
        return output.join(outputSeparator);
    };
    
    var isMultipleOfFive = function(number) {
        return number % 5 == 0;
    };
    
    var isMultipleOfThree = function(number) {
        return number % 3 == 0;
    };
};


module.exports = fizzBuzzer;