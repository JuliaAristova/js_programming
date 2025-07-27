class Person{
    //attributes: name, age
    //eat()
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Student extends Person {
  //attributes: name, age, grade
  //study(), eat()
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  } 
  study() {
    console.log(`${this.name} is studying.`);
  }  //overriding eat() method
}

class Teacher extends Person {
  //attributes: name, age, salary
  // teach(), eat()
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  teach() {
    console.log(`${this.name} is teaching.`);
  }  
}
let student = new Student("John", 15, "High School");
console.log(student);
student.eat();
student.study();


let teacher = new Teacher("Alice", 30, 80000);
console.log(teacher);
teacher.eat();
teacher.teach();