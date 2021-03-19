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
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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

// Validate password length meets criteria
const validatePasswordLength = (passwordLength) => {
  if (passwordLength >= 8 && passwordLength <= 128) {
    return true;
  } else {
    return false;
  }
};

// Confirm user's character selection
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
  return {
    isLowerCase,
    isUpperCase,
    isNumber,
    isSpecialCharacter,
  };
};

// Validate that at least one character type has been chosen
const validateCharacters = (characterChoices) => {
  if (
    characterChoices.isLowerCase ||
    characterChoices.isUpperCase ||
    characterChoices.isNumber ||
    characterChoices.isSpecialCharacter
  ) {
    return true;
  } else {
    return false;
  }
};

// Create combined array from selected character types
const getOptionsArray = (characterChoices) => {
  const optionsArray = [];
  // Confirm which of the character types is truthy, and combine their characters into a new array
  if (characterChoices.isLowerCase) {
    optionsArray.push.apply(optionsArray, lowerCaseArray);
  }
  if (characterChoices.isUpperCase) {
    optionsArray.push.apply(optionsArray, upperCaseArray);
  }
  if (characterChoices.isNumber) {
    optionsArray.push.apply(optionsArray, numbersArray);
  }
  if (characterChoices.isSpecialCharacter) {
    optionsArray.push.apply(optionsArray, specialCharacterArray);
  }
  return optionsArray;
};

// Function to randomize the characters in an array, returns a string
const getRandomCharacters = (arr) => {
  const randomCharacters = arr[Math.floor(Math.random() * arr.length)];
  return randomCharacters;
};

// Set password array according to user selected length and using the randomly shuffled array of chosen character types
const getPasswordArray = (arr, passwordLength) => {
  const passwordArray = [];
  for (let i = 0; i < passwordLength; i++) {
    const randomCharacters = getRandomCharacters(arr);
    passwordArray.push(randomCharacters);
  }
  return passwordArray;
};

// Join an array into a string
const joinPassword = (arr) => {
  let password = arr.join("");
  return password;
};

// Main App function
const generatePassword = () => {
  // Prompt for password length
  let passwordLength = prompt(
    "How many characters would you like your password to have?"
  );
  // convert passwordLength from string to number
  passwordLength = parseInt(passwordLength);

  // Validation of password length
  if (validatePasswordLength(passwordLength)) {
    const characterChoices = confirmCharacterChoice();

    // Check if at least one of character types is truthy
    if (validateCharacters(characterChoices)) {
      const optionsArray = getOptionsArray(characterChoices);

      // Set array for new password
      const passwordArray = getPasswordArray(optionsArray, passwordLength);
      let password = joinPassword(passwordArray);
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
