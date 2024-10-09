const age = parseInt(prompt("how old are you?"));

// if (isNaN(age) && age < 0){ // ❌
if (isNaN(age) || age < 0){
    console.log("Please Write a real positive number"); // 숫자가 아니면 출력
} else if(age < 18) { // 숫자일 경우 아래 중에 하나 출력
    console.log("You are too young");
} else if(age >= 18 && age <= 50) {
    console.log("you can drink");
} else if(age > 50 && age <= 80){
    console.log("you should do exercise");
} else if(age > 80){
    console.log("you can do whatever you want");
}