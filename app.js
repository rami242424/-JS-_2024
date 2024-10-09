const title = document.getElementById("hello");

function handleTitleClick(){
    const currentColor = title.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "white";
    } else { // blue가 아니다
        newColor = "blue";
    }
    title.style.color = newColor;
}

title.addEventListener("click", handleTitleClick);
