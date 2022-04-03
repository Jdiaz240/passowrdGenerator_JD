// Assignment Code
var generateBtn = document.querySelector("#generate");

const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



function generatePassword() {
  var firstprompt = prompt("Please choose between 8 to 129 characters?");
  var secondprompt = confirm("Would you like to include numbers"); 
  var thirdprompt = confirm("would you like to include special characters?");
  var fourthprompt = confirm("Would you like to include upercase letters?");
  var finalprompt = confirm("would you like to include lowercase letters?");

    
  if (password >= 8 && password <= 129) {
    alert(secondprompt);
   }
   else { alert("Please enter a valid number of characters.") 
   }
  
  if (secondprompt) {
    alert(thirdprompt)
  }

  if (thirdprompt) {
    alert(fourthprompt)
  }

  if (fourthprompt) {
    alert(finalprompt)
  }
  
  
}

 





















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
