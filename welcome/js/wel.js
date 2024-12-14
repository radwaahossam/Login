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

setTimeout(function() {
        localStorage.removeItem("loggedInUser");
        window.location.href = `../signup/index.html`;
}, 2000); 



