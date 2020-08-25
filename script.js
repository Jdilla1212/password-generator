// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword(){

  // Password is currently blank! We need to make a better one
  let password = "";





  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
