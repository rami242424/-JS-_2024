const title = document.getElementById("hello");

function handleTitleClick(){
    
    console.log("title was clicked!!");
    title.style.color = "blue";
}
title.addEventListener("click", handleTitleClick);