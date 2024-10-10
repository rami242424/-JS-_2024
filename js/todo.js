const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

const toDos = [];

// toDos array의 내용을 localStorage에 저장하는 함수
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
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



// 로컬에 저장되어있는 todos 불러오기(string으로 저장되어있음)
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos, "before parse");
if(savedToDos !== null){
    // 로컬에 string으로 저장되었는 todos array로 바꾸기
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos, "after parse");
    parsedToDos.forEach((item) => console.log("hello", item));

} else {
    // 저장되있는게 없으면
}
