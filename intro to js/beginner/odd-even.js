// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);
// console.log(number % 2 == 0);


// function isEven(number) {
//     if (number % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// const myNumber = 1641;
// const isMyNumberEven = isEven(myNumber);
// console.log('Is my number even', isMyNumberEven);

// is odd function
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

var myNumber =1201;
var isMyNumberOdd = isOdd(myNumber);
console.log('Is my number odd', isMyNumberOdd);



const herNumber = 522;
const isHerNumberOdd = isOdd(herNumber);
console.log('Is her number odd', isHerNumberOdd);