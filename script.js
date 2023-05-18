// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate Password
function generatePassword() {
  var passLength = 0;
  var check = false;

  // Get the length of the password
  while (passLength < 8 || passLength > 128 || check) {
    passLength = prompt("How many characters will your password have? (8-128)");
    //error check if non-number is entered into prompt box
    check = isNaN(passLength);
  }

  // What characters to use in prompts
  var numCat = 0;
  while (numCat <1){
    var lower = confirm("Will your password contain lowercase characters? (OK for yes, Cancel for no)");
    var upper = confirm("Will your password contain uppercase characters? (OK for yes, Cancel for no)");
    var number = confirm("Will your password contain numbers? (OK for yes, Cancel for no)");
    var special = confirm("Will your password contain special characters? (OK for yes, Cancel for no)");

    // Determine number of character classes
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

  // Declare array to save randomly generated characters
  var charArray = [];
  var charTracker = passLength;

  //Lowercase characters
  if (lower == true) {
    var numLower = 0;
    if (numCat == 1) {
      numLower = charTracker;
    }
    else{
      numLower = Math.floor((Math.random())*(charTracker-numCat)+1);
    }
    var lChar = "";
    for (i=0; i<numLower; i++) {
      lChar = String.fromCharCode(Math.floor((Math.random()*26)+97));
      charArray.push(lChar);
    }
    charTracker = charTracker-numLower;
    numCat--;
  }

  //Uppercase Characters
  if (upper == true) {
    var numUpper = 0;
    if (numCat ==1) {
      numUpper = charTracker;
    }
    else{
      numUpper = Math.floor((Math.random())*(charTracker-numCat)+1);
    }
    var uChar = "";
    for (i=0; i<numUpper; i++) {
      uChar = String.fromCharCode(Math.floor((Math.random()*26)+65));
      charArray.push(uChar);
    }
    charTracker = charTracker-numUpper;
    numCat--;
  }

 //Numbers
 if (number == true) {
  var numNum = 0;
  if (numCat == 1) {
    numNum = charTracker;
  }
  else {
    var numNum = Math.floor((Math.random())*(charTracker-numCat)+1);
  }
  var nChar = "";
  for (i=0; i<numNum; i++) {
    nChar = String.fromCharCode(Math.floor((Math.random()*10)+48));
    charArray.push(nChar);
  }
  charTracker = charTracker-numNum;
  numCat--;
 
  //Special Characters
  if (special == true) {
    var numSpec = charTracker;
    var sChar = "";
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

      charArray.push(sChar);
    }
  }
  console.log(charArray);



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
