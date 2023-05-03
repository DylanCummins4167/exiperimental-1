// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialSymbols =
  [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ]

var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function randomCharacter(characterList) {
  var randomIndex = Math.floor(Math.random() * characterList.length);

  return characterList[randomIndex];
}

// Write password to the #password input
function writePassword() {
  var randomPassword = '';

  var length = prompt("How many characters long do you want your password to be?");

  // Check if they typed in a valid number
  if (isNaN(length)) {
    alert("Enter a valid number.")
    return;
  }

  // Convert to a number
  length = Number(length);

  // Ask which types the user wants for their password
  var wantNumbers = confirm("Click OK to add numbers to your password.");
  var wantLowerCases = confirm("Click OK to add lower case letters to your password.");
  var wantUpperCases = confirm("Click OK to add upper case letters to your password.");
  var wantSymbols = confirm("Click OK to add special characters to your password.");

  // Array to store wanted characters
  var charactersList = [];

  // Add the wanted types to the charactersList
  if (wantNumbers === true) {
    charactersList = charactersList.concat(numbers);
  }

  if (wantLowerCases === true) {
    charactersList = charactersList.concat(lowerCase);
  }
  if (wantUpperCases=== true) {
    charactersList = charactersList.concat(upperCase);
  }
  if (wantSymbols === true) {
    charactersList = charactersList.concat(specialSymbols);
  }

  for(var i = 0; i < length; i++) {
    randomPassword += randomCharacter(charactersList)
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
