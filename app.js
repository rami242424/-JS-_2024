const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(potato){
    potato.preventDefault()
    console.log(loginInput.value);
    console.log(potato);
}

loginForm.addEventListener("submit", onLoginSubmit);