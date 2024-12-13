let loginForm = document.querySelector("#loginForm")
let userLoginEmail = document.querySelector("#loginEmail");
let userLoginPassword = document.querySelector("#loginPassword");

let loginEmailAlert = document.querySelector("#loginEmailAlert"); 
let loginPasswordAlert = document.querySelector("#loginPasswordAlert"); 
let loginsuccessAlert = document.querySelector("#loginsuccessAlert");
let faildLoginAlert = document.querySelector("#faildLoginAlert");
let allUsers =[];


if(localStorage.getItem("allUsers") !==null){
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}

loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    login();
    clearInputs();

})

function login(){
    let user = {
        email : userLoginEmail.value,
        password : userLoginPassword.value  
    };
    console.log(user);
    if(loginValidation(user) == true){
        loginsuccessAlert.classList.replace("d-none", "d-block");
        faildLoginAlert.classList.replace("d-block", "d-none");

        setTimeout(function(){
            window.location.href = `../welcome/wel.html`;
        }, 1000)
    }else{
        loginsuccessAlert.classList.replace("d-block", "d-none");
        faildLoginAlert.classList.replace("d-none", "d-block");
    }
}

function loginValidation(user){
    for (let i = 0; i < allUsers.length; i++) {
        if(allUsers[i].email.toLowerCase()== user.email.toLowerCase() && user.password.toLowerCase() == user.password.toLowerCase() ){
            localStorage.setItem("userName", allUsers[i].name);
            return true;
        }
    }
}

function clearInputs(){
    userName.value = null;
    userEmail.value = null;
    userPassword.value = null;
}