const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

// input이 입력되고 submit이 되면 
function onLoginSubmit(potato){
    potato.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // greeting.innerHTML = "Hello " + username;
    greeting.innerHTML = `Hello ${username}`;
}

loginForm.addEventListener("submit", onLoginSubmit);