const title = document.getElementById("hello");

function handleTitleClick(){
    console.log("title was clicked!!");
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "mouse enter";
}

function handleMouseLeave(){
    title.innerText = "mouse leave";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);