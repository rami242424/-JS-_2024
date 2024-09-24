const age = parseInt(prompt("how old are you?"));

// console.log(isNaN(age)); // 숫자 입력하면 false, 숫자가 아니면 true

// // confition has to be boolean
// if(conditon){
//     // condition === true
// } else {
//     // conditon === false
// }

if(isNaN(age)){
    // true = 숫자가 아닌것이 입력됨
    console.log("숫자를 입력하세요.");
} else {
    // false = 숫자가 입력됨
    console.log(age);
}

