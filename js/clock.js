const clock = document.querySelector("h2#clock");
// const clock = document.querySelector("#clock");
// const clock = document.elementById("clock");


function getClock(){
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}


getClock(); // 실행하면 항상 1초뒤부터 보여지기 때문에 함수를 바로 실행함으로써 갭없게만듬
setInterval(getClock, 1000);