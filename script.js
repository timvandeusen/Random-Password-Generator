// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var symbols = "!@#$%^&*()"
  var input = "";
  var randomPassword = "";
  var length = prompt ("Please choose a number within the range of 8 and 128 characters for your random password's length.");    
if (length < 8 || length > 128){}
else {
  var upperCase2 = confirm("Would you like to include uppercase letters? Click OK for yes and cancel for no.");
  var lowerCase2 = confirm("Would you like to include lowercase letters? Click OK for yes and cancel for no.");
  var numbers2 = confirm("Would you like to include numbers? Click OK for yes and cancel for no.");
  var symbols2 = confirm("would you like to include symbols? Click OK for yes and cancel for no.");
  }
  if (upperCase2) {input += upperCase};
  if (lowerCase2) {input += lowerCase};
  if (numbers2) {input += numbers};
  if (symbols2) {input += symbols};
  for (i = 0; i < length; i++) {
    randomPassword += input[Math.floor(Math.random() * input.length)]
  }
  return(randomPassword);
}
// Write password to the #password input
var randomPassword2 = document.querySelector("#password");
    function writePassword(randomPassword) {
    if (password.length === 0) {
        return;
    }
    randomPassword2.value = randomPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", function () { writePassword(generatePassword()) });
