// Assignment Code
var generateBtn = document.querySelector("#generate");

//  Global Variables
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
const specialCharacterArray = [
  "!",
  "?",
  "£",
  "$",
  "%",
  "*",
  "&",
  "@",
  "#",
  ":",
  ";",
  "~",
  "{",
  "}",
];
let isLowerCase;
let isUpperCase;
let isNumber;
let isSpecialCharacter;
let passwordLength;
let password = "";

// Validate password length
const validatePasswordLength = function () {
  if (passwordLength >= 8 && passwordLength <= 128) {
    return true;
  } else {
    return false;
  }
};

// Confirm character selection
const confirmCharacterChoice = function () {
  isLowerCase = confirm(
    "Would you like your password to contain lowercase characters?"
  );
  isUpperCase = confirm(
    "Would you like your password to contain uppercase characters?"
  );

  isNumber = confirm("Would you like your password to contain numbers?");

  isSpecialCharacter = confirm(
    "Would you like your password to contain special characters?"
  );
  return;
};

// Validate chosen characters
const validateCharacters = function () {
  if (isLowerCase || isUpperCase || isNumber || isSpecialCharacter) {
    return true;
  } else {
    return false;
  }
};

// Join the array into a string
const joinPassword = function () {
  password = passwordArray.join("");
};

// Main App function
const generatePassword = function () {
  // Prompt for password length
  passwordLength = prompt(
    "How many characters would you like your password to have?"
  );

  // Validation of password length
  if (validatePasswordLength()) {
    confirmCharacterChoice();

    // Check if at least one of character types is truthy
    if (validateCharacters()) {
      // Variable to store combined array of chosen character types
      let chosenOptionsArray = [];
      // Confirm which of the character types is truthy, and combine their characters into a new array
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

      // Set array for new password
      const setPasswordArray = function (arr) {
        let passwordArray = [];
        // set variable for empty password array ready to receive new values
        for (let i = 0; i < passwordLength; i++) {
          const randomCharacter = arr[Math.floor(Math.random() * arr.length)];
          passwordArray.push(randomCharacter);
        }
        return passwordArray;
      };
      // Define new variable for passwordArray
      passwordArray = setPasswordArray(chosenOptionsArray);
      joinPassword();
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
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);