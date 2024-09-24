const age = parseInt(prompt("how old are you?"));

if(isNaN(age) || age < 0){ // || 둘중에 하나만 true여도 true
    // true = 숫자가 아닌것이 입력됨
    console.log("정수로 된 숫자를 입력하세요.");
} else if(age < 18) {
    console.log("You are too young to drink");
} else if(age >= 18 && age <= 50){
    console.log("You can drink");
} else if(age > 50 && age <= 80) {
    console.log("take care of your healthy");
} else if(age > 80){
    console.log("You can do whatever you want");
}

true && true === true
true && false === false
false && true === false
false && false === false

true || true === true
true || false === true
false || true === true
false || false === false