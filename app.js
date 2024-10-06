const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY= "username";

function onLoginSubmit(potato){
    potato.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // 입력한 이름 저장
    localStorage.setItem(USERNAME_KEY, username);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername);
if (savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}