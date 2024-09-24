const calculater = {
    plus: function (a, b){
     a + b;
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

calculater.plus(2, 3);
const plusResult = calculater.plus(2, 3);
console.log(calculater.plus(2, 3));
console.log(plusResult, "plusResult");

calculater.minus(2, 3);
console.log(calculater.minus(2, 3));

calculater.times(2, 3);
console.log(calculater.times(2, 3));

calculater.divide(2, 3);
console.log(calculater.divide(2, 3));

calculater.power(2, 3);
console.log(calculater.power(2, 3));