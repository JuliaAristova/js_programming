/*
Attributes:
- employeeName
- employeeSalary
Methods:
- work()
*/

class Employee {
  constructor(employeeName, employeeSalary)  {
    this.employeeName = employeeName;
    this.salary = employeeSalary;
  }

  work() {
    console.log(`${this.employeeName} is working.`);
  }
}
let employee1 = new Employee("John", 110000);
console.log(employee1);
console.log(employee1.employeeName);
console.log(employee1.salary);

let employee2 = new Employee("Isabella", 120000);
console.log(employee2);

employee1.work();
employee2.work();

console.log("_____");
/*
Create a class named Item with the following requirements:
- Attributes: name, price, quantity
- Methods: 
    constructor" define and initialize the attributes
    calcPrice: calculate the total price of item 
*/

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calcPrice() {
    return this.price * this.quantity;
  }
}

let item1 = new Item("Laptop", 1000, 1);
console.log(item1);
console.log(`Total price of ${item1.name}: ${item1.calcPrice()} USD`);  