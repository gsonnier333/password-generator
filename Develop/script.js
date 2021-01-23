/*

  TODO: write up README, move files into the root directory instead of Develop


*/


// Assignment Code
var generateBtn = document.querySelector("#generate");
var numCriteria = 0; //number of criteria being used
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const special = "`~!@#$%^&*()-_=+\\|/?'\",<.>[{]}:;";

function generatePassword(){
  numCriteria=0; //reset this counter to avoid issues on repeat password generations
  //get length
  var length = prompt("How long would you like your password to be? (8-128 characters)", "8");
  while(isNaN(length) || length <= 7 || length >= 129){ //as long as they didn't pick a number between 8 and 128, keep prompting them
    alert("Please enter a number between 8 and 128.");
    length = prompt("How long would you like your password to be? (8-128 characters)", "8");
  }
  var pool = ""; //eventual pool of possible characters
  var pass = ""; //eventual final result for the password to be returned
  //get character types:
  //lowercase
  while(pool===""){ //as long as they haven't given any criteria
    if(confirm("Use lower case characters?")){
      pool += lower; //add lower case characters to our pool
      numCriteria++; //increment number of criteria
      pass += lower[Math.floor(Math.random() * lower.length)]; //add a random character that matches this criteria to the password ensure at least one is in the final result
    }
    //uppercase
    if(confirm("Use upper case characters?")){
      pool += upper; //add upper case characters to our pool
      numCriteria++; //increment number of criteria
      pass += upper[Math.floor(Math.random() * upper.length)]; //add a random character that matches this criteria to the password ensure at least one is in the final result
    }
    //numeric
    if(confirm("Use numeric characters?")){
      pool += numbers; //add numeric characters to our pool
      numCriteria++; //increment number of criteria
      pass += numbers[Math.floor(Math.random() * numbers.length)]; //add a random character that matches this criteria to the password ensure at least one is in the final result
    }
    //special
    if(confirm("Use special characters?")){
      pool += special; //add special characters to our pool
      numCriteria++; //increment number of criteria
      pass += special[Math.floor(Math.random() * special.length)]; //add a random character that matches this criteria to the password ensure at least one is in the final result
    }
    //error message when no criteria selected
    if(pool===""){
      alert("No criteria selected, please choose at least one of the options.");
    }
  }
  //generate password based on above
  
  
  for(var i = 0; i < length-numCriteria; i++){ //repeat for the total number of characters wanted, minus the number of criteria selected, as that many characters have already been added
    pass += pool[Math.floor(Math.random() * pool.length)]; //get a random character from the pool of possible characters and add it to our password
  }
  return pass; //return the final result
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
