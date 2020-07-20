# js-review
review of javascript

### Example of Data Types
```javascript
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
```