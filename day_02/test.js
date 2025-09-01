//create an array of strings abd add 10 names to it

let students = [
    "Emma",
    "Liam",
    "Olivia",
    "Noah",
    "Ava",
    "Ethan",
    "Sophia",
    "Mason",
    "Isabella",
    "William"
];
//set the first element to "Harry Potter"
students[0] = "Harry";


console.log(students);
//iterate over the array and print each name in reverse order
for (let i = students.length - 1; i >= 0; i--) {
    console.log(students[i]);
}

console.log("_____________________");

let numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];
//find the minimum and maximum number in the array, do not use built-in functions
let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(min);
console.log(max);

console.log("_____________________");

//give an array of 10 random numbers between 1 and 100
let randomNumbers = [];

for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}
console.log(randomNumbers);
//sort the array in ascending order, do not use built-in functions

for (let i = 0; i < randomNumbers.length - 1; i++) {
    for (let j = 0; j < randomNumbers.length - i - 1; j++) {
        if (randomNumbers[j] > randomNumbers[j + 1]) {
            let temp = randomNumbers[j];
            randomNumbers[j] = randomNumbers[j + 1];
            randomNumbers[j + 1] = temp;
        }
    }
}
console.log(randomNumbers);