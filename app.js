// loginForm을 정의할 필요가 있을 때,
// const loginForm = document.querySelector("#login-form");
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginBtn = loginForm.querySelector("button");

// loginForm을 정의할 필요가 없을 때,
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

function handlebtnClick(){
    console.log(loginInput.value);
}

loginBtn.addEventListener("click", handlebtnClick);