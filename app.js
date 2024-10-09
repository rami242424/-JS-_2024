const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username); // 중복코드 하나로 만들기
    
}

loginForm.addEventListener("submit", onLoginSubmit);

// 중복코드 하나로 만들기
function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `hello ${username}`;
}

// 내가 만든코드
// 로컬스토리지에 저장된 username이 있으면 form 숨기기
// const savedUsername = localStorage.getItem(USERNAME_KEY);
// if(savedUsername === null){ // 저장된 username이 없다.
//     // show the form
//     loginForm.classList.remove(HIDDEN_CLASSNAME);

// } else { // 저장된 username이 있다.
//     // show the greeting
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     greeting.classList.remove(HIDDEN_CLASSNAME);
//     greeting.innerText = `hello ${savedUsername}`;
// }


// 니코 코드

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername); // 중복코드 하나로 만들기
}


