/*
Type coercion is the process of converting a value from one type to another
(such as from a string to a number) 
*/

//implicit coersion
console.log("5" - 3); // 2 (string "5" is converted to number 5)
console.log("5" + 3); // "53" (number 3 is converted to string "3")

//explicit coersion
console.log(Number("5")); // 5
console.log(String(5)); // "5"
console.log(Boolean(0)); // false

console.log("------------");

const num = 42.5;
// Convert the number to a string
let numStr = num.toString();
console.log(typeof numStr);
console.log("String representation: " + numStr);

// Check if the number is an integer
let isInteger = Number.isInteger(num);
console.log("Is integer: " + isInteger);

// Parse a string representation of a number numStr from above and return an integer
let parsedInt = Number.parseInt(numStr, 10);
console.log(typeof parsedInt);
console.log("Parsed integer: " + parsedInt);

console.log("------------");

// Get the current date and time
let currentDate = new Date();
console.log(typeof currentDate);
console.log("Current date and time: " + currentDate);

const date = currentDate;
console.log(typeof date);

// Get the year of the given date
let year = currentDate.getFullYear();
console.log(typeof year);
console.log("Year of the given date: " + year);

// Convert the given date to a human-readable string
let dateString = date.toDateString();
console.log(typeof dateString);
console.log("Human-readable date string: " + dateString);