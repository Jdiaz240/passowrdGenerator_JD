// Assignment Code
var generateBtn = document.querySelector("#generate");

const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var passLen = 12



function generatePassword() {
  var firstprompt = prompt("Please choose between 8 and 12 characters?");
    
  if (passLen > 12 || passLen < 8) {
    alert("Please enter a valid number of characters.");
  }
  else 

  // var secondprompt = prompt("Would you like to include numbers?")
  
  if (confirm("Would you like to include numbers")) {
    open(thirdprompt);
  }

  var thirdprompt = prompt("Would you like to include special characters?")

}

 





















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
