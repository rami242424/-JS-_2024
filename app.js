const calculater = {
    plus: function (a, b){
        console.log("hello"); // hello
        return a + b;
        console.log("bye"); // 앞에 return으로 이미 함수가 끝나서 절대 출력되지않음!
    },

    minus: function (a, b){
        return a - b;
    },
    times: function (a, b){
        return a * b;
    },
    divide: function (a, b){
        return a / b;
    },
    power: function (a, b){
        return a ** b;
    },
}

const plusResult = calculater.plus(2, 3);
// console.log(calculater.plus(2, 3));
