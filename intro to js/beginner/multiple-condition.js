var gotJob = true;
var moneySaved = 20000;
var flat = true;
var house = true;

if (gotJob == true && moneySaved > 25000) {
    console.log("money")
}
else {
    console.log('no money')
}

if (gotJob == true || moneySaved > 25000) {
    console.log("money")
}
else {
    console.log('no money')
}

if ((gotJob == true && moneySaved > 20000) || house == true) {
    console.log('money')
}
else {
    console.log('no money')
}