function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}


var myInches = 132;
var feet = inchToFeet(myInches);
console.log('my Inches in feet', feet);

//mile to km
function mileToKm(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKm(26.2);
console.log('marathon in Km: ', marathon);