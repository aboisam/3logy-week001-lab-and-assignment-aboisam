//  Input
// Change this value (0-100)
//using if/else if/else statements to determine the letter grade based on the score
//  Logic
//  Output

let score = 85; 

let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80 && score <= 89) {
  grade = "B";
} else if (score >= 70 && score <= 79) {
  grade = "C";
} else if (score >= 60 && score <= 69) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Score: " + score + " - Grade: " + grade);