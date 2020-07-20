let name = 'Philip';
let age = 18;
let isCool = true;
const friends = ['Kevin', 'Molik', 'Jason', 'Frank', 'Asia'];

const tesla = {
    insdustry: 'Electric Cars',
    ceo: 'Elon Musk',
    yearFounded: 2003,
    foundingMembers: ['Elon', 'JB Straubel', 'Martin'],
    stockTicker: 'TSLA',
    vehicles: {
        vehicle1: 'Model S',
        vehicle2: 'Model X',
        vehicle3: 'Model 3',
    },
    print: function(){
        console.log('The ceo tesla is ' + this.ceo); //this. refer to tesla
    }
}

tesla.stockPrice = 1643.00;

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(tesla);
console.log(tesla.vehicles.vehicle3);
//or = console.log(tesla['vehicles']['vehicle3']);

tesla.print();

let myName = 'Philip';
let myAge = 18;
let isKool = true;
const myFriends = ['Max', 'Roy', 'Tom', 'Lee'];
const dog ={
    dogName: 'Elmo',
    breed: 'German Sherperd',
    dogAge: 2,
    food: {
        one: 'kibbles',
        two: 'chicken breasts',
        three: 'carrots',
    },
    print: function(){
        console.log('His foods are ' + this.food);

    }

}

dog.gender = 'male';

console.log(myName);
console.log(myAge);
console.log(isKool);
console.log(myFriends);
console.log(dog);
console.log(dog.food.two);


function printFriends(array){
    array.forEach(friend => { // or array.forEach(function(element){})
        console.log(friend);
    });
}


printFriends(friends);
printFriends(tesla.foundingMembers);

//standard fuction
function addNumbers(num1, num2){
    return num1 + num2;
}

//function expression
const multiplyNumbers = function(num1, num2){
    return num1 * num2;
};

//arrow function
const subtractNumbers = (num1, num2) => {
    return num1 - num2;
};
