// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }


// var numbers = [20, 50, 450, 32, 95];
// for (var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     if (number > 90){
//         break;
//     }
//     console.log(number);
// }


var numbers = [20, 50, 450, 32, 95];
for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 90){
        continue;
    }
    console.log(number);
}