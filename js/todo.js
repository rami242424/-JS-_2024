const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newToDo = toDoInput.value;

    toDoInput.value = "";
    console.log(newToDo, toDoInput.value);


}

toDoForm.addEventListener("submit", handleToDoSubmit);