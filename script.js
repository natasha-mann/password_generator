// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare a new function on line 3
function generatePassword() {
  // Create a variable to store our generated password
  var password = "";

  // Logic would go here
  // Prompt for password length
  const passwordLength = prompt(
    "How many characters would you like your password to have?"
  );

  // Validation of password length
  if (passwordLength >= 8 && passwordLength <= 128) {
    //if password meets criteria, continue with character type confirmations
    const isLowerCase = confirm(
      "Would you like your password to contain lowercase characters?"
    );
    const isUpperCase = confirm(
      "Would you like your password to contain uppercase characters?"
    );

    const isNumber = confirm(
      "Would you like your password to contain numbers?"
    );

    const isSpecialCharacter = confirm(
      "Would you like your password to contain special characters?"
    );

    // Check if at least one of character types is truthy
    if (!isLowerCase && !isUpperCase && !isNumber && !isSpecialCharacter) {
      // If none of character types are truthy, show alert
      alert("You must include at least one character type in your password!");
    } else {
      // Now we have all of the user inputs so we have to generate the password!!
      alert("You win!");
    }
    // if password doesn't meet criteria, show alert
  } else {
    alert(
      "Password must have at least 8 characters, but no more than 128 characters."
    );
  }

  // Return our created password
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
