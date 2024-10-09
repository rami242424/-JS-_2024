const caluculator = {
    plus : function (a, b){
        return a + b;
    },
    minus : function (a, b){
        return a - b;
    },
    divide: function (a, b){
        return a / b;
    },
    multiple : function (a, b){
        return a * b;
    }, 
    power : function (a, b){
        return a ** b;
    }
}

const plusResult = caluculator.plus(2, 3);
// console.log(plusResult);
// 또는 콘솔창에 plusResult 만 입력해도 더해진 값이 출력 됨
const minusResult = caluculator.minus(plusResult, 3);
const divideResult = caluculator.divide(10, minusResult);
const multipleResult = caluculator.multiple(2, divideResult);
const powerResult = caluculator.power(multipleResult, 3);