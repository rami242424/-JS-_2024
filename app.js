const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
 
function onLoginSubmit(potato){
    potato.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username}`;
}

loginForm.addEventListener("submit", onLoginSubmit);