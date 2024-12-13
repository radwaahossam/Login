let message = document.getElementById("message");

window.addEventListener('load', function(){
    displayUser();
})

function displayUser(){
    if(localStorage.getItem("userName") !== null){
        message.innerHTML = `welcome ${localStorage.getItem("userName")}`
    }else{
        message.innerHTML ="";
    }
}

// let handleLogout = () => {
//     setTimeout(() => {
//         localStorage.removeItem("loggedInUser");
//         window.location.href = `../signup/index.html`;
//     }, 2000); 
// };

// const checkAuthentication = () => {
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if (!loggedInUser) window.location.href = `../signup/index.html`;
//     return loggedInUser;
// };
// const user = checkAuthentication();
// document.getElementById("logoutButton").addEventListener("click", handleLogout);

