// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()_+-=<>?/;:";
var lcase ="abcdefghijklmnopqrstuvwxyz";
var useNumber = "0123456789";


// Add event listener to generate button
// Prompt and confirm what the user is asking for in password once button is clicked
generateBtn.addEventListener("click", promptMe, writePassword);

//make character selection mandatory user will determine how long the password will be
function promptMe() {
var characters = (prompt("How many characters?"));
while(characters < 8 || characters > 128) {
  alert("Min characters is 8 and max is 128");
  var characters = (prompt("How many characters?"));
}

 if(confirm("Do you want lowercase letters?")) {

 }
 
 if(confirm("Do you want uppercase letters?")) {

 }

 if(confirm("Do you want numbers?")) {
 
 }

if(confirm("Do you want special characters (ex. !@#$%)?")) {

}
}
