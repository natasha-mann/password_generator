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
const validatePasswordLength = () => {
  if (passwordLength >= 8 && passwordLength <= 128) {
    return true;
  } else {
    return false;
  }
};

// Confirm character selection
const confirmCharacterChoice = () => {
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
const validateCharacters = () => {
  if (isLowerCase || isUpperCase || isNumber || isSpecialCharacter) {
    return true;
  } else {
    return false;
  }
};

// Create combined array
const getOptionsArray = () => {
  const optionsArray = [];
  // Confirm which of the character types is truthy, and combine their characters into a new array
  if (isLowerCase) {
    optionsArray.push.apply(optionsArray, lowerCaseArray);
  }
  if (isUpperCase) {
    optionsArray.push.apply(optionsArray, upperCaseArray);
  }
  if (isNumber) {
    optionsArray.push.apply(optionsArray, numbersArray);
  }
  if (isSpecialCharacter) {
    optionsArray.push.apply(optionsArray, specialCharacterArray);
  }
  return optionsArray;
};

// Set password Array
const getPasswordArray = (arr) => {
  const passwordArray = [];
  // set variable for empty password array ready to receive new values
  for (let i = 0; i < passwordLength; i++) {
    const randomCharacter = arr[Math.floor(Math.random() * arr.length)];
    passwordArray.push(randomCharacter);
  }
  return passwordArray;
};

// Join the array into a string
const joinPassword = (arr) => {
  password = arr.join("");
};

// Main App function
const generatePassword = () => {
  // Prompt for password length
  passwordLength = prompt(
    "How many characters would you like your password to have?"
  );

  // Validation of password length
  if (validatePasswordLength()) {
    confirmCharacterChoice();

    // Check if at least one of character types is truthy
    if (validateCharacters()) {
      const optionsArray = getOptionsArray();

      // Set array for new password
      const passwordArray = getPasswordArray(optionsArray);
      joinPassword(passwordArray);
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
