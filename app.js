const title  = document.querySelector(".hello h1");

console.dir(title);

function handleTitleClick(){
    title.style.color = "blue";
    // console.log("Title was Clicked!");
}

function handleMouseEnter(){
    title.innerText = "Mouse is here";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone";
}

// title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;

// title.addEventListener("mouseenter", handleMouseEnter);
title.onmouseenter = handleMouseEnter;

// title.addEventListener("mouseleave", handleMouseLeave);
title.onmouseleave = handleMouseLeave;


function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);


function handleWindowCopy(){
    alert("copier!");
}
window.addEventListener("copy", handleWindowCopy);

function handleWindowOffline(){
    alert("S!O!S!");
}
window.addEventListener("offline", handleWindowOffline);

function handleWindowOnline(){
    alert("ALL GOOD");
}
window.addEventListener("online", handleWindowOnline);