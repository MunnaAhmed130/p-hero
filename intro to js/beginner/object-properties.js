var computer = {
    price: 29000,
    storage: '156gb',
    color: 'black',
    processor:'intel i5'
}

computer['storage'] = '200gb'
computer.storage='100'
// console.log(object.property);
// console.log(computer);
// console.log(computer.processor);
var computerPrice = computer.price;
// console.log(computerPrice);
// set a object property value
computer.price = 22000;

// different ways to set a value of an object property
var propertyName = 'price';
computer['price'] = 23000;
computer[propertyName] = 19000;
console.log(computer);

