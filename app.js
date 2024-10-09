const caluculator = {
    plus : function (a, b){
        console.log(a + b);
    },
    minus : function (a, b){
        console.log(a - b);
    },
    divide: function (a, b){
        console.log(a / b);
    },
    multiple : function (a, b){
        console.log(a * b);
    }, 
    power : function (a, b){
        console.log(a ** b);
    }
}


caluculator.plus(1, 1); // 2
caluculator.minus(10, 9); // 1
caluculator.divide(10, 2); // 5
caluculator.multiple(2, 3); // 6
caluculator.power(2, 2); // 4