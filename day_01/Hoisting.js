let x; // Declaration
x = 123; // Initialization
console.log(x); // Usage
x = 321; // Usage because a is already initialized

let y = 123; // Declaration + Initialization

let a = 10;
let b;
b = 20;

func();

function func() {
    let b;
    b = 20;
    console.log("[func] a:", a);
    console.log("[func] b:", b);

}
console.log("[global] a:", a);
console.log("[global] b:", b);



