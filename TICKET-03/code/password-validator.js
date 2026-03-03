
// Password Validator
// The program checks if a password meets specific criteria:
// - At least 8 characters long
// - Contains at least one number
// - Contains at least one uppercase letter
// The program takes a password as input and evaluates it against the criteria.
// It then outputs whether the password is valid or not, along with any missing requirements.

function validatePassword(password) {
  const missing = [];


  if (password.length < 8) {
    missing.push("Password must be at least 8 characters long");
  }

  
  if (!/[0-9]/.test(password)) {
    missing.push("Password must contain at least one number");
  }

 
  if (!/[A-Z]/.test(password)) {
    missing.push("Password must contain at least one uppercase letter");
  }

  if (missing.length === 0) {
    return "✅ Password is valid";
  } else {
    return "❌ Password is invalid\nMissing requirements:\n- " + missing.join("\n- ");
  }
}


console.log(validatePassword("abc123"));       
console.log(validatePassword("Abcdefgh"));     
console.log(validatePassword("Abc12345"));    