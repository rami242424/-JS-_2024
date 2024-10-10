const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event){
    // console.log(event.target.parentElement, "클릭한 btn의 li"); // 클릭된 btn의 li부모를 확인할 수 있음
    const li = event.target.parentElement; // 삭제하고 싶은 li = 클릭된 btn의 li
    li.remove();
}

// todo 그리는 역할
function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
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
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);