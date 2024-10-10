const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

// newTodo가 추가되면 저장될 배열
let toDos = [];

// toDos array를 localStorage에 맡는 형식으로 바꿔 넣기(저장하기)
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 객체나 배열을 텍스트 형태로 변환
}

function deleteToDo(event){
    // console.log(event.target.parentElement, "클릭한 btn의 li"); // 클릭된 btn의 li부모를 확인할 수 있음
    const li = event.target.parentElement; // 삭제하고 싶은 li = 클릭된 btn의 li
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

// todo 그리는 역할
function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";

    btn.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

if(savedToDos !== null){
    const parsedTodo = JSON.parse(savedToDos); // string > array
    toDos = parsedTodo;
    parsedTodo.forEach(paintTodo);
}
