const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

// toDos array의 내용을 localStorage에 저장하는 함수
function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}


function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove()
}

function paintToDo(newTodo){
    // todo를 그리는 역할 ul안에 li button 만들기
    // console.log("i will paint ", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const btn = document.createElement("button");
    btn.innerText = "❌"
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
    btn.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();

    

}

toDoForm.addEventListener("submit", handleTodoSubmit);