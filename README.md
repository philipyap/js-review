# js-review
review of javascript

### Example of Data Types
```javascript
let myName = 'Philip';// strings
let myAge = 18;
let isKool = true; // boolean
const myFriends = ['Max', 'Roy', 'Tom', 'Lee']; //arrays
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

## Example of function
```
    //standard fuction
    function addNumbers(num1, num2){
        return num1 + num2;
    }

    //function expression
    const multiplyNumbers = function(num1, num2){
        return num1 num2;
    };

    //arrow function
    const subtractNumbers = (num1, num2) => {
        return num1 - num2;
    }
```

``` DOM Manipulation
const container = document.querySelector('.container');
console.log(container);

const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My First JS Review';

container.appendChild(headerTwo); // pin child to h2

//add a class to headerTwo
headerTwo.classList.add('subtitle', 'header-Two');
//headerTwo.setAttribute('class', 'header-two'); // add class for you and set it to where is it
headerTwo.classList.remove('header-Two');
console.log(headerTwo);
```

### More DOM manipulation
```javascript
//iterate through my friends array
for(let i = 0; i< friends.length; i++){
    let eachFriend = friends[i];


    //create and element
    const listItem = document.createElement('li');
    
    // add text to that element
    listItem.textContent = eachFriend;
    
    list.appendChild(listItem); // reference to ul
    
    console.log(list);
}

headerThree.addEventListener('click', function(){
    container.appendChild(list) // append child to li
})
```

### Codealong
```javascript
### isInside

Write a function `isInside(array, ele)` that returns true if `ele` is an element
inside of the `array`, false otherwise.

HINT: use indexOf

isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
isInside(['pete', 'adam', 'taylor'], 'fred'); // => false
```
### reverseStr
```js
Write a function `reverseStr(str)` that takes in a string as a parameter and
returns the string but with the characters in reverse.

Examples:

reverseStr('bootcamp'); //=> 'pmactoob'
reverseStr('General Assembly'); //=> 'ylbmessA lareneG'
```
### luckySevens
```js
Write a function `luckySevens(max)` that returns an array of all numbers up
to max (inclusive) that are divisible by 7.

Examples:

luckySevens(25); // => [ 7, 14, 21 ]
luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]
```
### copyMachine
```js
Write a function `copyMachine(element, num)` that takes in an element and a number
it should return an array of length `num` that is filled with `element`.

Examples:

copyMachine('candy', 0); // => []
copyMachine('candy', 2); // => [ 'candy', 'candy' ]
copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]
```
### everyOtherWord
```js
 Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
 an array containing every other word in that sentence.

 Examples:

everyOtherWord('hello how are you doing on this lovely day?');  => [ 'hello', 'are', 'doing', 'this', 'day?' ]
 everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]
```
### wordYeller
```js
Write a function `wordYeller(sentence)` that takes in a sentence string as
input. It should return the sentence where every word has an exclamation
point behind it, except words that already have punctuation. Punctuation
marks are ". , ! ? ; :"

Example 1
let sent = "Stop it now! Please, wont you stop?";
let yelledWords = wordYeller(sent);
yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true

Example 2
let words = "Go to the store and grab the following: milk, bread, run, and cake";
wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
```
### arraySubstring
```js
Write a function `arraySubstring(words, str)` that takes in an array of
strings and a string as arguments and returns an array where each element is
replaced with true if the string is a substring of the element and false if
it is not.

Examples:

arraySubstring(["hello", "history", "helix", "hellos"],"hel")
=> [true, false, true, true]
arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
=> [true, false, false, true] -->
```
