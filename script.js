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

}

var allArrays = {
  // Properties are made up of key-value pairs
  name: upperCaseLetters,
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

console.log(allArrays)








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
