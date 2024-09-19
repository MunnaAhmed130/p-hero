// let factorial = 1;
// for (let i = 0; i <= 5; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

function getFactorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++){
        fact = fact * i;
    }
    return fact;
}

var firstFactorial = getFactorial(7);
console.log(firstFactorial);
