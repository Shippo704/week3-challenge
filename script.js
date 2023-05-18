// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate Password Function
function generatePassword() {
  var passLength = 0;
  var check = false;

  //------------------------------------------------
  // User Input to declare variables
  //------------------------------------------------

  // Get the length of the password from user
  while (passLength < 8 || passLength > 128 || check) {
    passLength = prompt("How many characters will your password have? (8-128)");
    //error check if non-number is entered into prompt box
    check = isNaN(passLength);
  }

  // What characters to use in prompts
  var numCat = 0;
  //at least 1 character class must be selected
  while (numCat <1){
    var lower = confirm("Will your password contain lowercase characters? (OK for yes, Cancel for no)");
    var upper = confirm("Will your password contain uppercase characters? (OK for yes, Cancel for no)");
    var number = confirm("Will your password contain numbers? (OK for yes, Cancel for no)");
    var special = confirm("Will your password contain special characters? (OK for yes, Cancel for no)");

    // Determine number of character classes from user input
    if (lower) {
      numCat++;
    }
    if (upper) {
      numCat++;
    }
    if (number) {
      numCat++;
    }
    if (special) {
      numCat++;
    }
  }

  //-------------------------------------------------------------------------
  // Generate an array containing random characters according to user input
  //-------------------------------------------------------------------------

  // Declare array to save randomly generated characters
  var charArray = [];
  var charTracker = passLength;

  //Lowercase characters
  if (lower == true) {
    var numLower = 0;
    //if lowercase is the last/only category selected then all remaining characters will be lowercase
    if (numCat == 1) {
      numLower = charTracker;
    }
    //generate a random number of lowercase characters
    //leave at least 1 possible character for each remaining character class
    else{
      numLower = Math.floor((Math.random())*(charTracker-numCat)+1);
    }
    //add lowercase characters to an array that stores all the characters
    var lChar = "";
    for (i=0; i<numLower; i++) {
      lChar = String.fromCharCode(Math.floor((Math.random()*26)+97));
      charArray.push(lChar);
    }
    //update tracker/counter variables
    charTracker = charTracker-numLower;
    numCat--;
  }

  //Uppercase Characters
  if (upper == true) {
    var numUpper = 0;
    //if uppercase is the last/only category selected then all remaining characters will be uppsercase
    if (numCat ==1) {
      numUpper = charTracker;
    }
    //generate a random number of uppercase characters
    //leave at lease 1 possible character for each remaining character class
    else{
      numUpper = Math.floor((Math.random())*(charTracker-numCat)+1);
    }
    //add uppercase characters to an array that stores all the characters
    var uChar = "";
    for (i=0; i<numUpper; i++) {
      uChar = String.fromCharCode(Math.floor((Math.random()*26)+65));
      charArray.push(uChar);
    }
    //update tracker/counter variables
    charTracker = charTracker-numUpper;
    numCat--;
  }

 //Numbers
 if (number == true) {
  var numNum = 0;
  //if number is the last/only category selected then all remaining characters will be numbers
  if (numCat == 1) {
    numNum = charTracker;
  }
  //generate a random number of number characters
  //leave at least 1 possible character for each remaining category
  else {
    var numNum = Math.floor((Math.random())*(charTracker-numCat)+1);
  }
  //add numbers to an array that stores all variables
  var nChar = "";
  for (i=0; i<numNum; i++) {
    nChar = String.fromCharCode(Math.floor((Math.random()*10)+48));
    charArray.push(nChar);
  }
  //update tracker/counter variables
  charTracker = charTracker-numNum;
  numCat--;
}
 
  //Special Characters
  if (special == true) {
    //special characters will always be the last category
    var numSpec = charTracker;
    var sChar = "";
    //generate random special characters from ASCII values
    for (i=0; i<numSpec; i++) {
      sChar = Math.floor(Math.random()*15);
      //ASCII range 33-47
      if (sChar < 15) {
        sChar = String.fromCharCode(sChar + 33);
      }
      //ASCII range 58-64
      else if (sChar < 22){
        sChar = String.fromCharCode(sChar + 43)
      }
      //ASCII range 91-96
      else {
        sChar = String.fromCharCode(sChar + 69);
      }
      //add special characters to an array that stores all characters
      charArray.push(sChar);
    }
  }

  //--------------------------------------------------------------
  // Generate password randomly from array of random characters
  //--------------------------------------------------------------
  
  //Generate matching index array
  var indexArr = [];
  var index = 0;
  while (indexArr.length < passLength){
    index = Math.floor(Math.random()*passLength);
    if (indexArr.length == 0){
      indexArr.push(index);
    }
    else {
      //Antiduplication algorithm
      for (i=0; i<indexArr.length; i++){
        if (index == indexArr[i]){
          index = Math.floor(Math.random()*passLength);
          i = -1;
        }
      }
    indexArr.push(index);

    }
  }

  //Use matching index array to create password
  var pass = "";
  for (i=0; i<indexArr.length; i++) {
    pass = pass + charArray[indexArr[i]];
  }

  //return the password so writePassword() can use it
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);