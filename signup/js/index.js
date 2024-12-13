let registerForm = document.querySelector("#registerForm")
let userName = document.querySelector("#Name");
let userEmail = document.querySelector("#Email");
let userPassword = document.querySelector("#Password");

let nameAlert = document.querySelector("#nameAlert"); 
let emailAlert = document.querySelector("#emailAlert"); 
let passwordAlert = document.querySelector("#passwordAlert"); 
let existAlert = document.querySelector("#existAlert"); 
let successAlert = document.querySelector("#successAlert"); 
let allUsers = [];


if(localStorage.getItem("allUsers") !==null){
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}
else{
    allUsers= [];
}

registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    if(checkValidationOfAll()){
        addUsers();
        saveToLocalStorage();
        clearInputs();
    }
})

function inputValidation(ragex, item, alertMessage){
    let pattern = ragex ;
    if(pattern.test(item.value)){
        alertMessage.classList.replace("d-block", "d-none");
        // item.classList.add("is-valid");
        // item.classList.remove("is-invalid");
        return true;
    } 
    else{
        alertMessage.classList.replace("d-none", "d-block");
        // item.classList.add("is-invalid");
        // item.classList.remove("is-valid");
        return false;
    }
}

function checkValidationOfAll(){
    if(
        inputValidation(/^[A-Z][a-z]{2,}$/, userName, nameAlert) &&
        inputValidation(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[aA-zZ]{2,}$/, userEmail, emailAlert) &&
        inputValidation(/^((?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=-[\];:<>?]).{5,10})$/, userPassword, passwordAlert)
    ){
        return true;
    }
    else{
        return false;
    }
}

function addUsers(){
    let users = {
        name: userName.value,
        email: userEmail.value, 
        password: userPassword.value
    }
    if(isExist(users) === true){
        existAlert.classList.replace("d-none", "d-block");
        successAlert.classList.replace("d-block", "d-none");
    }
    else{
        allUsers.push(users);
        console.log(allUsers);
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
        successAlert.classList.replace("d-none", "d-block");
        existAlert.classList.replace("d-block", "d-none");
        
        setTimeout(function(){
            window.location.href= `../signin/login.html`;
        }, 2000)
    }
}
function isExist(users){
   for (let i = 0; i < allUsers.length; i++) {
        if(allUsers[i].email.toLowerCase() === users.email.toLowerCase()){
            return true;
        } 
   }
}

function saveToLocalStorage(){
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
}
function clearInputs(){
    userName.value = null;
    userEmail.value = null;
    userPassword.value = null;
}