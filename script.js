// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare a new function on line 3
function generatePassword() {
  // Create a variable to store our generated password
  var password = "";
  //  Create variables for all the character types we can choose from
  const lowerCaseArray = [
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
  const upperCaseArray = [
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
  const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialCharacterArray = ["!", "?", "£", "$", "%", "*", "&", "@", "#"];

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
    if (isLowerCase || isUpperCase || isNumber || isSpecialCharacter) {
      // Confirm which of the character types is truthy, and combine their characters into a new array

      var chosenOptionsArray = [];
      if (isLowerCase) {
        chosenOptionsArray.push.apply(chosenOptionsArray, lowerCaseArray);
      }
      if (isUpperCase) {
        chosenOptionsArray.push.apply(chosenOptionsArray, upperCaseArray);
      }
      if (isNumber) {
        chosenOptionsArray.push.apply(chosenOptionsArray, numbersArray);
      }
      if (isSpecialCharacter) {
        chosenOptionsArray.push.apply(
          chosenOptionsArray,
          specialCharacterArray
        );
      }
      // TO REMOVE - Test to make sure arrays have been combined correctly
      // console.log(chosenOptionsArray);
      // console.log("Array length " + chosenOptionsArray.length);

      // Select random character from new array
      function getRandomArray(arr) {
        var passwordArray = [];
        for (let i = 0; i < passwordLength; i++) {
          const randomCharacter = arr[Math.floor(Math.random() * arr.length)];
          passwordArray.push(randomCharacter);
        }
        return passwordArray;
      }
      // TO REMOVE - checks that getRandomCharacter function works
      // console.log(getRandomArray(chosenOptionsArray));

      // Define new variable for passwordArray
      const passwordArray = getRandomArray(chosenOptionsArray);
      // TO REMOVE - check that it works
      // console.log(passwordArray);

      // Join the array into a string
      var password = passwordArray.join("");
      return password;
    } else {
      // If none of character types are truthy, show alert
      alert("You must include at least one character type in your password!");
    }

    // if password doesn't meet criteria, show alert
  } else {
    alert(
      "Password must have at least 8 characters, but no more than 128 characters."
    );
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
