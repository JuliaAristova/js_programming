/*
3 types of scope:
- Global scope
- Block scope
- Function scope
*/


function func() {
    let sum = 321; // Function scope
    console.log(sum);
}
// global scope
let left = 10;
let right = 20;
{
    let x = left;     //block scope
    left = right;
}
console.log(left);
console.log(right);