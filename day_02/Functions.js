function greetings() {
  console.log("Hello, Programmers!");
  console.log("Welcome to JavaScript Programming!");
}

greetings();

console.log("-------------------");

function displayName(personName="Unknown") {
    console.log(`The name of the person is ${personName}.`);
}
displayName();
displayName("John Doe");

console.log("-------------------");

function addNumbers(num1, num2, num3 = 0) {
    return num1 + num2 + num3;
}

let result = addNumbers(5, 10);
console.log(result); 

let result2 = addNumbers(5, 10, 20);
console.log(result2);