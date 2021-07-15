var symbols = [
  "!@#$%^&*()_+-=[]{}|:;,.<>/?~`"
];

var numbers = [
  "0123456789"
];

var upperCaseLetters = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
];

var lowerCaseLetters = [
  "abcdefghijklmnopqrstuvwxyz"
];


function generatePassword() {

  var passSize = parseInt(
    prompt("How many characters would you like for your password?"),
    10
  );

if (passSize < 8) {
  alert("You must request at least 8 characters");
  return null;
}

if (passSize > 128) {
  alert("Your password must contain 128 characters or less");
  return null;
}


var containsLowerCase = confirm(
  "Click the OK button to include lowercase characters in your password"
);

var containsUpperCase = confirm(
  "Click the OK button to include uppercase characters in your password"
);

var containsNumbers = confirm(
  "Click the OK button to include numbers in your password"
);

var containsSymbols = confirm(
  "Click the OK button to include symbols in your password"
);


function buildArray(){
  if (containsLowerCase === true && containsUpperCase === false && containsNumbers === false && containsSymbols === false) {
    passwordPossibilities = lowerCaseLetters;
  } else if (containsLowerCase === true && containsUpperCase === true && containsNumbers === false && containsSymbols === false) {
    passwordPossibilities = lowerCaseLetters + upperCaseLetters;
  } else if (containsLowerCase === true && containsUpperCase === true && containsNumbers === true && containsSymbols === false) {
    passwordPossibilities = lowerCaseLetters + upperCaseLetters + numbers;
  } else if (containsLowerCase === true && containsUpperCase === true && containsNumbers === true && containsSymbols === true) {
  passwordPossibilities = lowerCaseLetters + upperCaseLetters + numbers + symbols;
  } else if (containsLowerCase === false && containsUpperCase === true && containsNumbers === true && containsSymbols === true) {
    passwordPossibilities = upperCaseLetters + numbers + symbols;
  } else if (containsLowerCase === false && containsUpperCase === false && containsNumbers === true && containsSymbols === true) {
    passwordPossibilities = numbers + symbols;
  } else if (containsLowerCase === false && containsUpperCase === false && containsNumbers === false && containsSymbols === true) {
    passwordPossibilities = symbols;
  } else if (containsLowerCase === false && containsUpperCase === false && containsNumbers === false && containsSymbols === true) {
    passwordPossibilities = numbers;
  } else if (containsLowerCase === false && containsUpperCase === true && containsNumbers === true && containsSymbols === false) {
    passwordPossibilties = upperCaseLetters + numbers;
  } else if (containsLowerCase === false && containsUpperCase === true && containsNumbers === false && containsSymbols === true) {
    passwordPossibilities = upperCaseLetters + symbols;
  } else if (containsLowerCase === false && containsUpperCase === true && containsNumbers === false && containsSymbols === false) {
    passwordPossibilities = upperCaseLetters;
  } else if (containsLowerCase === true && containsUpperCase === false && containsNumbers === true && containsSymbols === true) {
    passwordPossibilities = lowerCaseLetters + numbers + symbols;
  } else if (containsLowerCase === true && containsUpperCase === false && containsNumbers === true && containsSymbols === false) {
    passwordPossibilities = lowerCaseLetters + numbers;
  } else if (containsLowerCase === true && containsUpperCase === false && containsNumbers === false && containsSymbols === true) {
    passwordPossibilities = lowerCaseLetters + symbols;
  } else if (containsLowerCase === true && containsUpperCase === true && containsNumbers === false && containsSymbols === true) {
    passwordPossibilities = lowerCaseLetters + upperCaseLetters + symbols;
  }
}

buildArray()
//console.log(passwordPossibilities);

function randomizePassword() {
  var passwordText = "";
  for (var i = 0; i < passSize; i++)
    passwordText += passwordPossibilities.charAt(Math.floor(Math.random() * passSize));

    //console.log(passwordText)
    return passwordText;
}

randomizePassword()
return randomizePassword("");




}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
