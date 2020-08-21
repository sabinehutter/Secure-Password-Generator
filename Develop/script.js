// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// return string 

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specalChar = false;
var numbericChar = false;
var uppercaseChar = false;
var lowercaseChar = false;

var userOptionalChars = [];


function generatePassword() {
  // ==============  define variables  ==============  

  // Array of special characters to be included in password
  var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  var generateButton = document.querySelector("#generate");
  var userOptionalChars = [];
}

// ==============  function definitions  ==============  
function getUserOptions() {

  // collect information from user
  var userLength = window.prompt("How Many Characteres Would You Like Your Password to Contain? (Minimum of 8, Maximum of 128)")

  if (numericCharacters.includes(userLength) === true){
    var specialCharFlag = window.confirm("Click OK to Confirm Including Special Characters.")
    var numericCharFlag = window.confirm("Click OK to Confirm Including Numeric Characters.")
    var lowerCharFlag = window.confirm("Click OK to Confirm Lowercase Characters.")
    var upperCharFlag = window.confirm("Click OK to Confirm Uppercase Characters.")  }
  else{
    window.alert("Please enter a NUMBER between 8 and and 128")
  }


  // save user input (obj, array, bol - save as one obj)

  // check length - longer than 8 and shorter than 128

  // check for lowercase
  // check for uppercase
  // check for special 
  // check for numeric

  // check that at least one is true
  // else - alert user 

}

function generatePassword(userOptions) {
  var password = [];

  // if lower
  // push random lower char to password
  // add lowerCharsArray to optinalChars

  // if upper
  // push random upper char to password
  // add upperCharsArray to optinalChars


  // if special
  // push random special char to password
  // add specialCharsArray to optinalChars


  // if number 
  // push random number char to password
  // add numberCharsArray to optinalChars

  // for lop between # of elements in pass to user input max # 

  // make array a string
  // return password string

}

// ==============  function calls  ==============  

// getUserOptions();

//  geeneratePassword(userOptions)





// Add event listener to generate butto
generateBtn.addEventListener("click", function (event) {
  getUserOptions()

})