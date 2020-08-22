// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// return string 

// ======= vars definition ======
// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var userOptionalChars = [];

// ==============  function definitions  ==============  
function getUserOptions() {


  // collect information from user
  var userLength = parseInt(window.prompt("How Many Characteres Would You Like Your Password to Contain? (Minimum of 8, Maximum of 128)"));

  //  confirm it is number 
  if (isNaN(userLength) === true) {
    window.alert("Please enter a NUMBER");
    getUserOptions()
    return;
  }

  // checking that length is in range 8 and 128
  if (userLength < 8 || userLength > 128) {
    window.alert("Please ensure your your entry is BETWEEN 8 and 128");
    getUserOptions()
    return;
  }

  // checking if user wants numbers
  var numericCharFlag = window.confirm("Click OK to Confirm Including Numeric Characters.")


  // checking if user wants special characters
  var specialCharFlag = window.confirm("Click OK to Confirm Including Special Characters.")

  // checking if user wants lowercase 
  var lowerCharFlag = window.confirm("Click OK to Confirm Lowercase Characters.")

  //  checking if users wants uppercase
  var upperCharFlag = window.confirm("Click OK to Confirm Uppercase Characters.")

  // check that at least one condition is true
  if (numericCharFlag === false && specialCharFlag === false && lowerCharFlag === false && upperCharFlag === false) {
    //alert user 
    alert("Please Select at Least One Character Condition (Uppercase, Lowercase, Special Characters, or Numberic Characters)");
    getUserOptions()
    return;
  }

  // save user input (obj, array, bol - save as one obj)
  var userInput = {
    length: userLength,
    specialCharacters: specialCharFlag,
    numericNumbers: numericCharFlag,
    lowercaseLetters: lowerCharFlag,
    uppercaseLetters: upperCharFlag
  };

  console.log(userInput)
  return userInput
}

function getRandom(randomArray) {
  var randomNumber = Math.floor(Math.random() * randomArray.length);
  var randomChar = randomArray[randomNumber];

  return randomChar
}

function generatePassword(userOptions) {

  var userConditions = getUserOptions();

  var password = [];

  var possibleChar = [];

  var confirmedChar = [];

  for (i = 0; i < userConditions.length; i++) {
    // if lower
    if (userConditions.lowercaseLetters == true) {
      // add lowerCharsArray to optinalChars
      possibleChar = possibleChar.concat(lowerCasedCharacters);

      // push random lower char to password
      confirmedChar.push(getRandom(lowerCasedCharacters))
    }

    // if upper
    if (userConditions.uppercaseLetters == true) {
      // add upperCharsArray to optinalChars
      possibleChar = possibleChar.concat(upperCasedCharacters);

      // add upperCharsArray to optinalChars
      confirmedChar.push(getRandom(upperCasedCharacters))
    }

    // if number 
    if (userConditions.numericNumbers == true) {
      // add numberCharsArray to optinalChars
      possibleChar = possibleChar.concat(numericCharacters);

      // push random number char to password
      confirmedChar.push(getRandom(numericCharacters))
    }


    // if special
    if (userConditions.specialCharacters == true) {

      // add specialCharsArray to optinalChars
      possibleChar = possibleChar.concat(specialCharacters);

      // push random special char to password
      confirmedChar.push(getRandom(specialCharacters));
    }
  }

  console.log(possibleChar)

  // for loop to narrow down to user input length
  for (var i = 0; i < userConditions.length; i++) {
    var possChar = getRandom(possibleChar);

    password.push(possChar)
  }

  // making sure at least of confirmed chars is in the result 

  for (element in password) {
    // checking length user case

    if (parseInt(password.length) === parseInt(userConditions.length)) {
      var matchingLength = "match"
    }

    if (userConditions.specialCharacters === true && specialCharacters.includes(password[element]) || userConditions.specialCharacters === false && specialCharacters.includes(password[element]) === false) {
      var matchingSpecialChar = "match"
    }

    if (userConditions.numericNumbers === true && numericCharacters.includes(password[element]) || userConditions.numericNumbers === false && numericCharacters.includes(password[element]) === false) {
      var matchingNumericChar = "match"
    }

    if (userConditions.lowercaseLetters === true && lowerCasedCharacters.includes(password[element]) || userConditions.lowercaseLetters === false && lowerCasedCharacters.includes(password[element]) === false) {
      var matchingLowercaseChar = "match"    
    }

    if (userConditions.uppercaseLetters === true && upperCasedCharacters.includes(password[element]) || userConditions.uppercaseLetters === false && upperCasedCharacters.includes(password[element]) === false) {
      var matchingUppercaseChar = "match"
    }
  }

console.log("Your Password length : (" + matchingLength + ")")
console.log("Your Selection of Special Char : (" + matchingSpecialChar + ")")  
console.log("Your Selection of Numeric Char : (" + matchingNumericChar + ")")  
console.log("Your Selection of Lowercase Char : (" + matchingLowercaseChar + ")")  
console.log("Your Selection of Uppercase Char : (" + matchingUppercaseChar + ")")  

// return password string
console.log(password)
  return password.join("");
  // make array a string

}

// ==============  function calls  ==============  

// Add event listener to generate button
generateBtn.addEventListener("click", function (event) {
  writePassword()
})