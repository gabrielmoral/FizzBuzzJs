"use scrict";

var app = require("../fizzBuzzer");
var chai = require("chai"),
    expect = chai.expect;
    
chai.Should();

describe("FizzBuzzer", function () {
    
    var fizzBuzzer = new app();
    
    it("until 1 should not apply tranformations", function(){
        fizzBuzzer.until(1).should.equals("1");
    });
    
    it("until 3 should apply Fizz transformation", function(){
        fizzBuzzer.until(3).should.equals("1 2 Fizz");
    });
    
    it("until 5 should apply Buzz transformation", function(){
        fizzBuzzer.until(5).should.equals("1 2 Fizz 4 Buzz");
    });
    
    it("until 15 should apply FizzBuzz tranformation", function(){
        fizzBuzzer.until(15).should.equals("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz");
    });
});




