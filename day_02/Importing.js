const utility = require("./Utility.js");
//to import a particular function from a separate file, use require() function.

const {calculate} = require("./Utility.js");

let result = utility.square(7);
console.log(result);

console.log(utility.cube(2 ));  

console.log(utility.calculate(10, 2, "/"));

let result2 = calculate(10, 2, "*");
console.log(result2);