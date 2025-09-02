/*
objects are a fundamental data type used to store collections of data 
and more complex entities. 
- collection of properties, 
- each property is defined as a key-value pair
*/
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
console.log(person);
console.log(`name: ${person.name}`);
console.log(`age: ${person.age}`);
console.log("is student: " + person["isStudent"]);

Object.defineProperty(person, "details", {
    get: function () {
        return this.name + ' is ' + this.age + ' years old.'
    }
});
console.log(person.details);

let employee = {
    firstName: "Alice",
    lastName: "Smith"
};

Object.defineProperty(employee, "fullName", {
    get: function () {
        return this.firstName + " " + this.lastName;
    },
    set: function (name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
});

console.log(employee.fullName); // "Alice Smith"
employee.fullName = "Bob Johnson";
console.log(employee.firstName); // "Bob"
console.log(employee.lastName); // "Johnson"