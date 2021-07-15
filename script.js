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

/*Referenced activity 9 to construct these 2 "if" statements that prevent the user from entering the wrong size of password... 
 would want to condense to 1 statement except that the user needs to see the reason why their input was rejected.*/
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



// Referenced activity 21 to help make array references.
var allArrays = {
  passSize: passSize,
  lowerCaseLetters: lowerCaseLetters,
  upperCaseLetters: upperCaseLetters,
  numbers: numbers,
  symbols: symbols
};

console.log(allArrays)



//Possible framework for restricting what the function can pick randomly from the selected arrays:

if (lowerCaseLetters === true && upperCaseLetters === false && numbers === false && symbols === false) {
  passwordPossibilities = lowerCaseLetters;
} else if (lowerCaseLetters === true && upperCaseLetters === true && numbers === false && symbols === false) {
  passwordPossibilities = lowerCaseLetters, upperCaseLetters;
} else if (lowerCaseLetters === true && upperCaseLetters === true && numbers === true && symbols === false) {
  passwordPossibilities = lowerCaseLetters, upperCaseLetters, numbers;
} else if (lowerCaseLetters === true && upperCaseLetters === true && numbers === true && symbols === true) {
passwordPossibilities = lowerCaseLetters, upperCaseLetters, numbers, symbols;
} else if (lowerCaseLetters === false && upperCaseLetters === true && numbers === true && symbols === true) {
  passwordPossibilities = upperCaseLetters, numbers, symbols;
} else if (lowerCaseLetters === false && upperCaseLetters === false && numbers === true && symbols === true) {
  passwordPossibilities = numbers, symbols;
} else if (lowerCaseLetters === false && upperCaseLetters === false && numbers === false && symbols === true) {
  passwordPossibilities = symbols;
} else if (lowerCaseLetters === false && upperCaseLetters === false && numbers === false && symbols === true) {
  passwordPossibilities = numbers;
} else if (lowerCaseLetters === false && upperCaseLetters === true && numbers === true && symbols === false) {
  passwordPossibilties = upperCaseLetters, numbers;
} else if (lowerCaseLetters === false && upperCaseLetters === true && numbers === false && symbols === true) {
  passwordPossibilities = upperCaseLetters, symbols;
} else if (lowerCaseLetters === false && upperCaseLetters === true && numbers === false && symbols === false) {
  passwordPossibilities = upperCaseLetters;
} else if (lowerCaseLetters === true && upperCaseLetters === false && numbers === true && symbols === true) {
  passwordPossibilities = lowerCaseLetters, numbers, symbols;
} else if (lowerCaseLetters === true && upperCaseLetters === false && numbers === true && symbols === false) {
  passwordPossibilities = lowerCaseLetters, numbers;
} else if (lowerCaseLetters === true && upperCaseLetters === false && numbers === false && symbols === true) {
  passwordPossibilities = lowerCaseLetters, symbols;
} else if (lowerCaseLetters === true && upperCaseLetters === true && numbers === false && symbols === true) {
  passwordPossibilities = lowerCaseLetters, upperCaseLetters, symbols;
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
