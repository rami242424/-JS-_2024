const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

function handlebtnClick(){
    const username = loginInput.value;
    console.log(username);
}

loginBtn.addEventListener("click", handlebtnClick);