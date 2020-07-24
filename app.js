// let name = 'Philip';
// let age = 18;
// let isCool = true;
// const friends = ['Kevin', 'Molik', 'Jason', 'Frank', 'Asia'];

// const tesla = {
//     insdustry: 'Electric Cars',
//     ceo: 'Elon Musk',
//     yearFounded: 2003,
//     foundingMembers: ['Elon', 'JB Straubel', 'Martin'],
//     stockTicker: 'TSLA',
//     vehicles: {
//         vehicle1: 'Model S',
//         vehicle2: 'Model X',
//         vehicle3: 'Model 3',
//     },
//     print: function(){
//         console.log('The ceo tesla is ' + this.ceo); //this. refer to tesla
//     }
// }

// tesla.stockPrice = 1643.00;

// console.log(name);
// console.log(age);
// console.log(isCool);
// console.log(friends);
// console.log(tesla);
// console.log(tesla.vehicles.vehicle3);
// //or = console.log(tesla['vehicles']['vehicle3']);

// tesla.print();

// let myName = 'Philip';
// let myAge = 18;
// let isKool = true;
// const myFriends = ['Max', 'Roy', 'Tom', 'Lee'];
// const dog ={
//     dogName: 'Elmo',
//     breed: 'German Sherperd',
//     dogAge: 2,
//     food: {
//         one: 'kibbles',
//         two: 'chicken breasts',
//         three: 'carrots',
//     },
//     print: function(){
//         console.log('His foods are ' + this.food);

//     }

// }

// dog.gender = 'male';

// console.log(myName);
// console.log(myAge);
// console.log(isKool);
// console.log(myFriends);
// console.log(dog);
// console.log(dog.food.two);


// function printFriends(array){
//     array.forEach(friend => { // or array.forEach(function(element){})
//         console.log(friend);
//     });
// }


// printFriends(friends);
// printFriends(tesla.foundingMembers);

// //standard fuction
// function addNumbers(num1, num2){
//     return num1 + num2;
// }

// //function expression
// const multiplyNumbers = function(num1, num2){
//     return num1 * num2;
// };

// //arrow function
// const subtractNumbers = (num1, num2) => {
//     return num1 - num2;
// };

// // dom = document object model

// const container = document.querySelector('.container');
// console.log(container);

// const headerTwo = document.createElement('h2');
// headerTwo.textContent = 'My First JS Review';

// container.appendChild(headerTwo); // pin child to h2

// //add a class to headerTwo
// headerTwo.classList.add('subtitle', 'header-Two');
// //headerTwo.setAttribute('class', 'header-two'); // add class for you and set it to where is it
// headerTwo.classList.remove('header-Two'); // remove class from headerTwo
// console.log(headerTwo);

// headerTwo.addEventListener('click', function(){ // once people click and it will run the function
//     headerTwo.textContent = 'Philip';
// })

// //make another element
// const headerThree = document.createElement('h2');
// headerThree.textContent = 'friends';

// container.appendChild(headerThree);

// console.log(headerThree);

// const list = document.createElement('ul');

// //iterate through my friends array
// for(let i = 0; i< friends.length; i++){
//     let eachFriend = friends[i];

//     const listItem = document.createElement('li');
//     listItem.textContent = eachFriend;

//     list.appendChild(listItem); // reference to ul
    
//     console.log(list);
// }

// headerThree.addEventListener('click', function(){
//     container.appendChild(list) // append child to li
// })

// //reference each friend
// //create a li
// //add textContent to that li
// //append that to a ul (unordered list)

// // problem solving: 
// // - [ ] Do I understand what the prompt is asking?
// // - [ ] Am I able to break the problem down?
// // - [ ] What is my strategy for solving the problem?
// // - [ ] Do I understand what my code is doing?
// // - [ ] Am I able to foresee any edge cases?
// // - [ ] Am I able to track the order of the code that is being executed?
// // - [ ] Am I able to track the values of the variables?
// // - [ ] Am I able to walk through my code line by line with an example?
// // - [ ] Do I have a working solution?


// // fizzBuzz
// //Write a function that does the following:
//     // takes in an array
//     //chack each number in the array
//     // if the number is divisible 5 and 3 === fizzbuzz
//     // if the number is divisible by 3 === fizz
//     // if the number is divisible by 5 === 'buzz'
// // return an array


//   // ex:
//   //[3,5,15,20,9,7]
//   // ['Fizz', 'Buzz', 'FizzBuzz', 'Buzz', 'Fizz', 7 ]  

//   //set up an array
//   //iterate through the array that going to be paased in array
//   //check remainder of each element
//   //push the result of each element inside the result array
//   //return result array

//   function fizzBuzz(array){
//       let result = []; // start from empty array

//       for( let i = 0; i < array.length; i++){
//           let num = array[i];
//           console.log(num); // 3,5,15,..

//           if(num % 3 === 0 && 5 === 0){
//                 result.push('FizzBuzz');// do something in here
//           } else if (num % 3 === 0){
//                 result.push('Fizz');// do something in here
//           } else if (num % 5 === 0) {
//                 result.push('Buzz');
//           }else {
//                 result.push(num);
//           }

//       }

//       return result;// print the result array in the end
//   }

//   console.log(fizzBuzz ([3,5,15,20,9,7]));


//isInside

// function isInside(array,ele){
//     for (let i=0; i<array.length; i++){
//         if (array[i] === ele){
//             return true;
//         }
//     }
//     return false;
// }
// const array = ['taylor','rome','adam'];
// console.log(isInside(array,'philip'));


// // reverseStr

// function reverseString(str) {
    
//     var splitString = str.split("");  
    
//     var reverseArray = splitString.reverse(); 
    
//     var joinArray = reverseArray.join(""); 
    
//     return joinArray; 
// }
// console.log(reverseString("bootcamp"));
// console.log(reverseString("General Assembly"));


// luckySeven


// function luckySeven(max){
// //     let num7 = [];
// //     for (let i = 0; i < max; i++){
// //         if(num7 === max){

// //         num7 += 7;
        
// //         }
// //         return num7;
// //     }

//     let seven = [];
//     for(let i = 7; i <= max; i+=7){
//         console.log(i);
//         seven.push(i);
//     }

//     return seven;

// }  

// console.log(luckySeven(25));
// console.log([7,14,21]);
// console.log(luckySeven(42));
// console.log([7,14,21,28,35,42]);

//copyMachine


// function copyMachine (element, num){
//     let result = [];
//     for(let i = 0; i < num; i++){
//         result.push(element);
//     }
//     return result;
// }

// console.log((copyMachine('candy', 2)));
// console.log(copyMachine('bread', 4));


// //everyword


// function everyOtherWord(sentence){

//     let result = [];
//     let splitSentence = sentence.split(" ");

//     for(let i = 0; i < splitSentence.length; i++){
//         if (i%2 === 0){ // 2 / 0 = 0, thats why it starts from the first word
//             result.push(splitSentence[i]); // =>  [hello, are, doing, this, day]
//         }
//     }

//     return result;
// };
//                           //   0     1    2   3   4   5   6   7       8
// console.log(everyOtherWord("hello how are you doing on this lovely day?"));

//wordYeller


// function wordYeller(sentence){
//     let result = [];
//     let splitSentenceOne = sentence.split(" ");
    
//     for( let i = 0; i < splitSentenceOne.length; i++){

//         if(splitSentenceOne[i].indexOf('!') !==-1){
            
//         }
//         else if(splitSentenceOne[i].indexOf('?') !==-1){
//             result.push(splitSentenceOne[i]);
//         }
//         else if(splitSentenceOne[i].indexOf(':') !==-1){
//             result.push(splitSentenceOne[i]);
//         } 
//         else if(splitSentenceOne[i].indexOf(',') !==-1){
//             sentence.push(splitSentenceOne[i]);
//         }
//         else if(splitSentenceOne[i].indexOf('.') !==-1){
//             result.push(splitSentenceOne[i]);
//         }
//         else if (splitSentenceOne[i].indexOf(';') !==-1){
//             result.push(splitSentenceOne[i]);
//         }
//         else {
//             result.push(splitSentenceOne[i]);
//         }    
        
//     return sentence = splitSentenceOne.join("!");
//     }
// }
// console.log(wordYeller(" Stop it now! please, won't you stop? "));

// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.

// Examples:

// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true] 

function arraySubString(word, str){

    let result= [];
    for(let i = 0; i < str.length; i++)

    if(str.length <=2 )



}
console.log(arraySubString(["hell", "history", "helix", "hellos"], "hel"))