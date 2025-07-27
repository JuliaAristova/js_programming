let school = "CYDEO school";
console.log(school);
console.log(typeof school);

console.log(school.length);

console.log(school.charAt(0));
console.log(school[0]);

console.log(school[school.length - 1]);

console.log("-----------------");
for (let i = 0; i < school.length; i++) {
  console.log(school[i]);
}  


console.log("-----------------");
//strings are immutable

console.log(school.toUpperCase());
console.log(school.toLowerCase());
console.log(school);

console.log("-----------------");
let expectedResult = "JavaScript";
let actualResult = "JAVASCRIPT";
console.log(expectedResult === actualResult);

//convert to lower case and compare
console.log(expectedResult.toLowerCase() === actualResult.toLowerCase());


console.log("-----------------");
let str = "python python";
//replace first occurrence
str = str.replace("python", "javascript");
console.log(str);

//replace all occurrences
str = "python python";
str = str.replace(/python/g, "javascript");  //g flag for global replacement
//str = str.replaceAll("python", "javascript");
console.log(str);

console.log("-----------------");
let email = "cydeoschool@gmail.com";
let domain = email.substring(email.indexOf("@") + 1); // get domain
console.log(domain);

let domain2 = email.substring(email.indexOf("@")+1, email.lastIndexOf("."));
console.log(domain2);

console.log("-----------------");

let employeeName = "James";
let employeeSalary = 100_000;

let employeeInfo = `My name is ${employeeName}, my salary is \$${employeeSalary}.`;
console.log(employeeInfo);