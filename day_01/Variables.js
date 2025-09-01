let studentName;
let studentAge = 20;
let isFullTime = true;

console.log(studentName); // Output: undefined, since studentName is declared but not initialized
console.log(studentAge);
console.log(isFullTime);

studentName = "James";
console.log(studentName);

console.log(typeof studentName);
console.log(typeof studentAge);
console.log(typeof isFullTime);

let intNull = null;
console.log(intNull);

console.log("_________");
if (true) {
  var a = 10;
  let b = 20;
}
console.log(a); // Output: 10, since 'var' is function-scoped or globally scoped
//console.log(b);  - Output: ReferenceError, since 'let' is block-scoped and not accessible outside the block

let c = 30;
//let c = 40;  // This will throw an error because 'let' does not allow redeclaration in the same scope

var d = 50;
var d = 60; // This will not throw an error, as 'var' allows redeclaration in the same scope
console.log(d);

/*
constant variables are used in two cases:
- to declare unchangeable variables whose values are known at the stage of program writing, and
- to declare variables that do not need to be changed during program execution.
*/
const PI = 3.14; //recommended to use uppercase for constants
// PI = 3.14159;  // This will throw an error, as 'const' does not allow reassignment
