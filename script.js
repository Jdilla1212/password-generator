// Constants
const generateBtn = document.querySelector("#generate");
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = ["!", "@", "#", "$", "%", "&"];

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// /**
//  * generate a password based on certain criteria
//  */
function generatePassword() {

  //   //input criteria from user
  //   //If any condition is true, include the appropriate array
  let possibleCharacterOptions = []


  const lengthChoice = window.prompt("How many characters (between 8 and 128) would you like your password to be?");
  if (lengthChoice < 8 || lengthChoice > 128) {
    alert("You picked a no-no");
    return "Try again"
  }
  // console.log(lengthChoice);

  const includeSpecialCharacters = window.confirm("Would you like to use special characters?");
  // console.log(includeSpecialCharacters);

  const includeUpperCase = window.confirm("Would you like to include upper case letters?");
  // console.log(includeUpperCase);

  const includeLowerCase = window.confirm("Would you like to include lower case letters?");
  // console.log(includeLowerCase);

  const includeNumbers = window.confirm("Would you like to use numbers?");
  // console.log(includeNumbers);
  // Password is currently blank! We need to make a better one
  let password = "";
  let hasAddedSpecialChar = false;
  let hasAddedLowerCase = false;
  let hasAddedUpperCase = false;
  let hasAddedNumber = false;

  if (includeUpperCase) {
    possibleCharacterOptions.push(...alphaUpper);
  }
  if (includeLowerCase) {
    possibleCharacterOptions.push(...alphaLower);
  }
  if (includeNumbers) {
    possibleCharacterOptions.push(...numerical);
  }
  if (includeSpecialCharacters) {
    possibleCharacterOptions.push(...specialCharacters);
  }
  console.log(possibleCharacterOptions);

  //create for loop that'll repeat number of lengthChoice times
  for (let i = 0; i < lengthChoice; i++) {
    console.log(password);
    if (includeSpecialCharacters && !hasAddedSpecialChar) {
      password = password + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      hasAddedSpecialChar = true;
      continue;
    }
    if (includeLowerCase && !hasAddedLowerCase) {
      password = password + alphaLower[Math.floor(Math.random() * alphaLower.length)];
      hasAddedLowerCase = true;
      continue;
    }
    if (includeUpperCase && !hasAddedUpperCase) {
      password = password + alphaUpper[Math.floor(Math.random() * alphaUpper.length)];
      hasAddedUpperCase = true;
      continue;
    }
    if (includeNumbers && !hasAddedNumber) {
      password = password + numerical[Math.floor(Math.random() * numerical.length)];
      hasAddedNumber = true;
      continue;
    }
    password = password + possibleCharacterOptions[Math.floor(Math.random() * possibleCharacterOptions.length)]
  }


  return password;


}
//math.random out of possible char options
//concatenate random chars






// // Main Process

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


