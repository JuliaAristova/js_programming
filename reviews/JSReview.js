let num = 10;
console.log(num);

console.log("__________ Equals _____________");

let actualResult = "100.5";
let expectedResult = 100.5;
console.log(actualResult === expectedResult);
console.log(actualResult == expectedResult);

console.log("__________Let vs Var _____________");

//let actualResult;

var x;
x = 5;
var x;
console.log(x);

console.log("_________ CONST ___________");

const PI = 3.14;
const JULY_DAY = 31;
//JULY_DAY = 30; // This will throw an error, as 'const' does not allow reassignment
console.log(JULY_DAY);

console.log("_________ IF ELSE ______________");

let browser = "Chrome";
if (browser === "Chrome") {
  console.log("Selected browser: Chrome");
} else if (browser === "Firefox") {
  console.log("Selected browser: Firefox");
} else if (browser === "Safari") {
  console.log("Selected browser: Safari");
} else {
  console.log("Selected browser: not supported");
}
console.log("___________ SWITCH ____________");

//switch statement is faster in execution
//swithc can be used only with equal conditions

switch (browser) {
  case "Chrome":
    console.log("Selected browser: Chrome");
    break;
  case "Firefox":
    console.log("Selected browser: Firefox");
    break;
  case "Safari":
    console.log("Selected browser: Safari");
    break;
  default:
    console.log("Selected browser: not supported");
}

console.log("_______ For Loop __________");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("_______ Enhanced For Loop __________");
let str = "JAVASCRIPT";
for(let char of str) {
    console.log(char);
}

console.log("_______ String __________");
let str2 = "ak2324ssdfdf348654mpot";
//remove digits
let str3 = str2.replace(/\d/g, '');
console.log(str3);

let expectedTitle = "Self Enrollment Portal";
let actualTitle = "self enrollment portal";

console.log(expectedTitle === actualTitle);
console.log(expectedTitle.toLowerCase() === actualTitle.toLowerCase());
console.log(`The Expected title is: ${expectedTitle}. The actual title is: ${actualTitle}.`);

console.log("_______ Array __________");
let elements = ["Java", 1, 2.5, true, "Python"];

for(let element of elements) {
    console.log(element);
}

//loop through array using index in reverse order
 for(let i = elements.length - 1; i >= 0; i--) {
    console.log(elements[i]);
}

console.log("_______ Function __________");

//create a function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

//create a function to reverse a string, do not use built-in reverse function
function reverseStringWithoutReverse(str) {
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("Hello World"));