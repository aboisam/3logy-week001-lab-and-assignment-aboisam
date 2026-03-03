
// Simple If/Else
// Check if a number is positive or negative
// The program takes a number as input.
// It checks whether the number is greater than zero.
// If true → prints that the number is positive.
// Otherwise → prints that the number is negative.


let number = 25;

if (number > 0) {
    console.log("The number", number, "is positive");
} else {
    console.log("The number", number, "is negative");
}


// Multiple Conditions (else if)
// Check a student's score and assign letter grade
// The program takes a score between 0–100.
// It checks the score against ranges using if/else if/else conditions.
// Depending on the range, it assigns a letter grade ( through ).
// Finally, it prints the score alongside the grade.

const score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Score", score + ":", "Grade", grade);


// Nested Conditions
// Check if someone can vote
// First, check if the person’s age is 18 or older.
// If yes, then check the registration status.
// If registered → print that they are eligible and registered.
// If not registered → print that they are eligible but not registered.
// If age is less than 18 → print that they are not eligible to vote.


const age = 20;
const isRegistered = true;

if (age >= 18) {
    if (isRegistered) {
        console.log("You are eligible to vote and registered!");
    } else {
        console.log("You are eligible to vote but not registered.");
    }
} else {
    console.log("You are not eligible to vote.");
}