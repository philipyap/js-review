# Summary July 22,2020

<!-- Write a summary of what we learned so far regarding HTML, JavaScript, CSS
Write an example of each topic to solidify your learning
Add that to your README.md
Here are the things that we have covered so far:
fetch
HTML Forms
Constructor Function
Class
Promises
async/await -->

### HTML CSS JAVASCRIPT
```
HyperText Markup Language (HTML), Cascading Style Sheets (CSS), and JavaScipt are the languages that tun the web. 
HTML is for adding meaning to raw content b marking it up. CSS is for formatting that marked up content. JavaScript 
is for making that content and formatting interactive.

```

### HTML
#### This is how HTML looks like, and we can input any texts, images, and URL that show on the web page.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

```
### CSS
#### It helps to style the web page looks better
```
1{
    font-size: 40px;
    display: flex;
    justify-content: center;
    padding: 30px;
    margin: 0 auto;
    color: darkgray;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

form{
    padding: 30px ;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    font-family: 'Courier New', Courier, monospace;
}

```
### JavaScript
#### We can use Javascript in so many ways on a web page, for instant, to create a reset button for users:
```
reset.addEventListener('click', getReset);

for (const gameOne of game) {
  gameOne.addEventListener('click', gameClick)
}
```
### HTML Form
#### The form elements that contain various types of input elements, ex: 
```
<form action="results.html" method="get" enctype="multipart/form-data">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required>
        </div>

        <div>
            <label for="email">Email</label>
            <input type="text" name="email" id="email" required>
        </div>
</form>
```
### fetch
#### The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.
```
document.addEventListener('DOMContentLoaded', function(){
   
    const requestURL= "https://randomuser.me/api/?results=5"

    fetch(requestURL)
    .then(function(responseData){

        // Fetch will package the response into an object with some methods that allow us to do some useful things with the response
        // use the .json() method to return the data in json format
        console.log(responseData)
        return responseData.json()
    })
```
### Contructor Function
#### The construcor method is special method JavaScript for creating and initializing and object created within a class, ex:
```
class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  barkHello() {
    console.log(`Woof! I am called ${this.name} and I am ${this.age} human-years old.`)
  }
}
```
### Class
#### Call class name as a function with the new keyword to make new variable tpyes
```
class Car {
    constructor(year, make, model, color){
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }

    drive(){
        console.log('Vroom');
    }
    intro(){
        console.log('this is a ' + this.make + ' ' + this.model);
    }
}

let tesla = new Car ('2020', 'Tesla', 'Model S', 'red');
console.log(tesla);
tesla.drive();
tesla.intro();
```
### Promise
#### 3 states: pending, fullfilled, rejected
```
var isMomHappy = false;

var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);
```
### Async/Await
#### The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
```
sync function printUsers() {
    const endpoint = 'https://api.github.com/users/philipyap';
    
    let philip = await fetch(endpoint).then(res => res.json());
    console.log(philip);
  }
  printUsers();
```