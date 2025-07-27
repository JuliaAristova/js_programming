//create an array of strings and add 10 names to it
let students = [
  "Alice Smith",      
  "Bob Johnson",
  "Charlie Brown",
  "David Lee",
  "Eve Taylor",
  "Frank Wilson",
  "Grace Davis",
  "Henry Miller",
  "Irene Clark",
  "Jack Anderson",
];
//print the array to console
console.log(students); 

//set the first element to "Harry Potter"
students[0] = "Harry Potter";
//print the updated array to console
console.log(students);
//set the last element to "Draco Malfoy"
students[students.length - 1] = "Draco Malfoy";
//print the updated array to console
console.log(students);

console.log("_____________________");

//display all element of the array in reverse order
for(let i = students.length - 1; i >= 0; i--) {
  console.log(students[i]);
}

console.log("_____________________");
let numbers = [ 100, -200, 300, 400, 5, 4, 6, 7, 8, 9, 345];

//find the minimum and maximum number in the array, do not use built-in functions
let min = numbers[0];
let max = numbers[0];
for(let i = 1; i < numbers.length; i++) {
  if(numbers[i] < min) {
    min = numbers[i];
  }
  if(numbers[i] > max) {
    max = numbers[i];
  }
} 
console.log("Minimum number: ", min);
console.log("Maximum number: ", max);

console.log("_____________________");
//write a program that sort the array in ascending order, do not use built-in functions
for(let i = 0; i < numbers.length - 1; i++) {
  for(let j = 0; j < numbers.length - i - 1; j++) {
    if(numbers[j] > numbers[j+1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j+1];
      numbers[j+1] = temp;
    }
  }
}
console.log("Sorted array: " + numbers);

console.log("_____________________");
let nums = [1,1,1,1,2,2,2,3,3,3,4,4,4,4,5,5,5,5,5];

//remove duplicates from the array, do not use built-in functions
let uniqueNums = [];
for(let i = 0; i < nums.length; i++) {
  if(uniqueNums.indexOf(nums[i]) === -1) {
    uniqueNums.push(nums[i]);
  }
} 
console.log("Array with unique elements: " + uniqueNums);

console.log("_____________________");