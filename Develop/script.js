
// Assignment code here
function generatePassword() {
  var promptLength = window.prompt("How long do you want your password to be (between 8 and 128 characters");
  
  if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return generatePassword();
  }
  
  var promptLowercase = window.confirm("Do you want lowercase letters?");
  var promptUppercase = window.confirm("Do you want uppercase letters?");
  var promptNumeric = window.confirm("Do you want numeric values?");
  var promptSpecialCharacters = window.confirm("Do you want special characters?");

  if (!promptLowercase && !promptUppercase && !promptNumeric && !promptSpecialCharacters) {
    window.alert("Need to select at least one of the four character options")
    return generatePassword();
  };

  var promptLowercase = T;
  var promptUppercase = F;
  var promptNumeric = T;
  var promptSpecialCharacters = F;

  var CharArray = []
  if (promptLowercase) {
    CharArray[CharArray.length] = ["lowerCase"]
  } 
  if (promptUppercase) {
    CharArray[CharArray.length] = ["upperCase"]
  }
  if (promptNumeric) {
    CharArray[CharArray.length] = ["numeric"]
  }
  if (promptSpecialCharacters) {
    CharArray[CharArray.length] = ["special"]
  }

  //if we're missing a selected character type, just callback the function
  password = [];

  for (let index = 0; index < promptLength.length; index++) {
    const element = array[index];
    
  }
}

function generateRandomLetter() {
  var letters = 'abcdefghijklmnopqrstuvwxyz'
  var value = Math.floor(Math.random() * 25);
  return letter = letters[value]
}

function generateRandomLetter() {
  var numbers = '0123456789'
  var value = Math.floor(Math.random() * 9);
  return number = numbers[value]
}

function generateRandomSpecialChar() {
  var specials = '~`!@#$%^&*()-_=+[{]}|;:<,>./?'
  var value = Math.floor(Math.random() * 28);
  return special = specials[value]
}


var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
