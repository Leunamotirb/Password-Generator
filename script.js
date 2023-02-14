// Assignment code here
function generatePassword(){
  var length = 30;
  var chars = "0123456789!@#$%^&*.()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var pw = "";
  for (let i = 0; i < 8; i++){
    if (i<8){
    alert("Password length must be at least 8 Characters");
    }else {
      confirm("Click OK to confirm including Special Characters")
    }
  }
  return pw;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var password= document.getElementById("Password");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  document.getElementById("Password").value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function promptme(){
  prompt("How many characters would you like your password to contain?");
  function passwordMessage(){
    if (length < 8){
      alert("Password length must be at least 8 Characters");
    }else if (length >= 8) {
      confirm("Click OK to confirm including Special Characters");
    }else{
    return pw;
    };
  };
  };
