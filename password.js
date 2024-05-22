// function hide(element) {
//     let item = document.getElementById(element);
//     let item2 = document.getElementById("status");
//     if (item.style.display === "none"){
//         item.style.display = "block";

//     }else{
//         item.style.display = "none";
//     }
//     const item3 = document.createTextNode("********************");
//     document.body.insertBefore(item3, item2);
//     item2.innerHTML = "Password hidden!";
// } 

function hide(element) {
    let passwordElement = document.getElementById(element);
    let statusElement = document.getElementById("status");
  
    if (passwordElement.style.display === "none") {
      passwordElement.style.display = "block";
      statusElement.innerHTML = "Password shown!";
      // Ensure item3 exists and hide it
      const item3 = document.getElementById("item3");
      if (item3) {
        item3.style.display = "none";
      }
    } else {
      passwordElement.style.display = "none";
      statusElement.innerHTML = "Password hidden!";
      // Show the existing item3
      const item3 = document.getElementById("item3");
      if (item3) {
        item3.style.display = "block";
      }
    }
  }
  

  const passwordLengthInput = document.getElementById("passwordLength");
  const lengthValueSpan = document.getElementById("lengthValue");
  
  passwordLengthInput.addEventListener("input", function() {
    lengthValueSpan.textContent = this.value;
  });

  generatePasswordBtn.addEventListener("click", function() {
    const length = parseInt(passwordLengthInput.value);
    passGen(length);
  });  

function passGen(len) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ<>,.?/:;[]{}|!@#$%^&*()1234567890_-+=~";
  
    // Generate a random password
    const generatedPassword = generateRandomPassword(len, alphabet);
  
    
     // Update UI
    if(generatedPassword.length >=len){
    document.getElementById("passwd").innerHTML = generatedPassword; 
    //console.log(document.getElementById("passwd"));
    document.getElementById("status").innerHTML = "Password created!";
    document.getElementById("passwd").style.display = "block"; 
    }//else{
      //  document.getElementById("status").innerHTML = "Error";
    //}
  
    // Clear the input field after copying (security precaution)
    //passwordInput.value = '';
    //document.body.removeChild(passwordInput);
  }
  
  // Helper function to generate a random password of specified length
  function generateRandomPassword(length, charSet) {
    let password = "";
    var newIndex = 0;
    for (var i = 0; i < length; i++) {
      newIndex = Math.floor(Math.random() * (charSet.length-1));
      password += charSet.charAt(newIndex);
      //console.log(password);
    }
    if(password.includes("<") ){
        password = password.replace(/</g, "&lt;");
    }
    if(password.includes(">") ){
        password = password.replace(/>/g, "&gt;")
    }

    return password;

  }
  


