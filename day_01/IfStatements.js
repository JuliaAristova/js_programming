let score = 50;

if (score >= 60) {
    console.log("You passed the exam.");
} else {
    console.log("You failed the exam.");
}

// Example of multi-branch if-else statement
let number = 15;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Example of nested if statement
score = 600;
if (score >= 0 && score <=100) {
    if (score >= 60) {
        console.log("You passed the exam.");
    } else {
        console.log("You failed the exam.");
    }
}
else {
    console.log("Invalid score.");
}
