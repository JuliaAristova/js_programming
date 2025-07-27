let elements = ["JavaScript", "Python", "Java", "C++", 1, 3.14, true, null];
console.log(elements);

let students = ["John", "Janie", "Mary", "Anna"];
console.log(students);

for (let i = 0; i < students.length; i++) {
  console.log( (i + 1) + " - " + students[i]);
}

for(let student of students) {
  console.log(student);
}   

let employees = ["James", "John", "Janie", "Mary", "Anna"];
console.log(employees.length);
employees[0] = "Jack"; // update first element
console.log(employees);

employees.push("Tom"); // add new element at the end
console.log(employees); 
employees.unshift("Alice"); // add new element at the beginning
console.log(employees); 
employees.shift(); // remove first element
console.log(employees);
employees.pop(); // remove last element
console.log(employees); 