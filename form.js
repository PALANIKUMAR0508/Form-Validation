
document.getElementById("Form-Validation").addEventListener( 'submit', function (event) {
    // console.log(event);
    event.preventDefault();

    let userName = document.getElementById("UserName").value.trim()
    let email = document.getElementById("Email").value.trim()
    let password = document.getElementById("password").value.trim()
    let confirmPassword = document.getElementById("ConfirmPassword").value.trim()

    let uNameError=document.getElementById("UserName-Error")
    let emailError=document.getElementById("Email-Error")
    let passwordError=document.getElementById("Password-Error")
    let confirmPasswordError=document.getElementById("Password-Not-Match")

    let isValid=true;

    let uNamePattern=/^[a-zA-Z]+ [A-Za-z]+$/;

    if (userName === "" ) {
        uNameError.innerText = "*Username is required";
        isValid=false;
    }
    else if(!uNamePattern.test(userName)){
        uNameError.innerText = "*Enter Your Full Name";
        isValid=false;
    }
    else if(!uNamePattern.test(userName)){
        uNameError.innerText = "";
        isValid=true;
    }

     let emailPattern=/^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;

    if (email === "" ) {
        emailError.innerText = "*Email is required";
        isValid=false;
    }
    else if(!emailPattern.test(email)){
        emailError.innerText = "*Enter a Valid Email";
        isValid=false;
    }
    else if(!emailPattern.test(email)){
        emailError.innerText = "";
        isValid=true;
    }

    if (password === "" ) {
        passwordError.innerText = "*Password is required";
        isValid=false;
    }
    else if(password.length<=5 || password.length>10){
        passwordError.innerText = "*Enter a password Char between 5 to 10";
        isValid=false;
    }
    else if(password.length>5 || password.length<10){
        passwordError.innerText = "";
        isValid=true;
    }

    if (confirmPassword === "" ) {
        confirmPasswordError.innerText = "*Confirm Password is required";
        isValid=false;
    }
    else if(password !== confirmPassword){
        confirmPasswordError.innerText = "*Password Not Match";
        isValid=false;  
    }
    else if(password === confirmPassword){
        confirmPasswordError.innerText = "";
        isValid=true;
    }

   if( isValid){
    alert(`Hi ${userName}, Welcome to our website!`)
    console.log(userName,email,password);
   }
})
