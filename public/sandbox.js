"use strict";
// example 1
let greet;
// notice how name and greeting do not need to match a and b, just the type needs to match
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action == 'add') {
        return numOne + numTwo;
    }
    else { // need else clause otherwise returns void (NOT ALLOWED by function definition, MUST return number)
        return numOne - numTwo;
    }
};
