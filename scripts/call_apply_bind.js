function checkFun(a, b, c){
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}
checkFun.apply(1, [2, 3, 4]);

function sumOfNumbers() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
var sumCall = sumOfNumbers.call(null,1,2,3);
console.log(sumCall);
var sumApply = sumOfNumbers.apply(null, [1, 2, 3]);
console.log({ sumApply });
sumApply();