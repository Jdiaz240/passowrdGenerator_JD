// Assignment Code
var generateBtn = document.querySelector("#generate");

const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var passWd = [];


function generatePassword() {
  var firstprompt = prompt("Please choose between 8 to 129 characters?");    
  if (firstprompt <= 8 || firstprompt >= 129) {
   return alert("Please enter a valid number of characters.");
   } 

  var secondprompt = confirm("Would you like to include numbers"); 
  if (secondprompt) {
    passWd = concat(numberChars);
  } 
  
  var thirdprompt = confirm("would you like to include special characters?");
  if (thirdprompt) {
    passWd = concat(numberChars,specialChars);
  }

   var fourthprompt = confirm("Would you like to include upercase letters?");
   if (fourthprompt) {
     passWd = concat(numberChars,specialChars,uppercase);
   }

   var finalprompt = confirm("would you like to include lowercase letters?");
   if (finalprompt) {
     passWd = concat(numberChars,specialChars,uppercase,lowercase);
   }
  // if (secondprompt) {
  //   alert(thirdprompt)
  // } else { return firstprompt;
  
  // }

  // if (thirdprompt) {
  //   alert(fourthprompt)
  // }

  // if (fourthprompt) {
  //   alert(finalprompt)
  // }
  
  
}

 
  
  
  





















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
