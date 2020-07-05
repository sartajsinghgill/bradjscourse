console.log("Hello World")

/* Variables
 var, let, const 
 var - is globallys scoped, so dont use .
 let - a new value can be re-assigned to let .
 const - a constant variable where value cannot be changed . They cannot be initialized either, while initializing you have to assign value to them */

const age = 30
let age2 = 31
age2 = 32
console.log(age2)

/* Primitie Data types
 String, Numbers, Boolean, null, undefined */
const name = 'John'
const rating = 4.5
const isCool = true
const x = null
const y = undefined
let z // this will be undefined

console.log(typeof name)
console.log(typeof rating)
console.log(typeof isCool)
console.log(typeof x) // will return object
console.log(typeof y)
console.log(typeof z)

//Concatenation of string - old way
console.log('User name is '+name)

//Concatenation of string - new way - template string , use backticks instead of quotes
console.log(`User name is ${name}`)

const hw = 'Hello World'
console.log(hw.length)
console.log(hw.toUpperCase())
console.log(hw.toLowerCase())
console.log(hw.substring(0,5))
console.log(hw.split(' '))
console.log(hw.toLocaleUpperCase())


//Arrays
const fruits = ['Apple','Banana','Oranges']
console.log(fruits)
console.log(fruits[1])
fruits[3] = 'Grapefruit'
console.log(fruits[3])
fruits.push('Mangoes') //Add an item to the end of the array
console.log(fruits[4])
fruits.unshift('Melon') // Add an item to the beginning of the array
console.log(fruits)
fruits.pop() //Remove last element of the array
console.log(fruits)
console.log(fruits.indexOf('Melon')) //Get index of element in array

/*Object Literals
This is used to create objects within JS, you can give the object as many properties as you like, it can contain other objects as well as arrays*/
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['Music', 'Movies', 'Sports'],
    address: {
        street: '123 Fake Street',
        city: 'Ludhiana',
        state: 'Punjab'
    }
}

console.log(person) // Prints the entire object
console.log(person.address.city) //Prints just the city
console.log(person.hobbies[1]) // Prints the second hobby

const { firstName, lastName } = person //Destructuring, you can take values out of object and assign to constants with this syntax
console.log(firstName, lastName)

person.email = 'John@hey.com' //Add a property to the object
console.log(person)

const todos = [
    {
        id: 0,
        text: 'Work on JS',
        isCompleted: false
    },
    {
        id: 1,
        text: 'Wake Up',
        isCompleted: true
    },{
        id: 2,
        text: 'Breathe',
        isCompleted: true
    }
]

console.log(todos) // todos is an array of objects
console.log(todos[1].text)

//JSON
const todoJSON = JSON.stringify(todos) // Convert array of objects to JSON
console.log(todoJSON)

//For loop
for(let i = 0;i < 10;i++){
    console.log(`For Loop number ${i}`)
}

for(let i = 0;i < todos.length;i++){
    console.log(`Todo item ${todos[i].id} - ${todos[i].text}`)
}

//While 
let i = 0;
while(i < 10){
    console.log(`While loop number ${i}`)
    i++
}

//For of loop
for(let todo of todos){
    console.log(todo.text)
}

//High order array methods
// forEach, map, filter

//forEach
todos.forEach(function(todo){
    console.log(todo.text)
})

//map - This basically takes some value from the array and you can assign those to create an array of just those values
const todoText = todos.map(function(todo){
    return todo.text
})

console.log(todoText)

//filter - This basically takes an array and can filter the data based on any condition
const filteredTodos = todos.filter(function(todo){
    return todo.isCompleted === true
})
console.log(filteredTodos)

//Filter+Map
const filteredMappedTodos = todos.filter(function(todo){
    return todo.isCompleted === true
}).map(function(todo){
    return todo.text
})
console.log(filteredMappedTodos)

//If Else
const xVal =20

if(xVal === 10) {
    console.log('xVal is 10')
}
else {
    console.log('xVal is not 10')
}

//If else if
const ballSize = 5
const batSize = 10
if(ballSize > 5 || batSize > 10){
    console.log('Either bat or ball size is big')
}
else if(ballSize < 5 || batSize < 10){
    console.log('Either bat or ball size is small')
}
else{
    console.log('Bat and ball size is just right')
}

//Ternery operator
const money = 100
const colour = money > 1000 ? 'Green' : 'Orange' // Question is ternery operater, read statement as if money > 1000 then assign value green otherwise assign value red

console.log(colour)

switch(colour) {
    case 'Red':
        console.log('Colour is Red')
        break
    case 'Green':
        console.log('Colour is Green')
        break
    default:
        console.log('Colour is NOT Red or Green')
        break
}

//Functions

function addNums(num1 = 0, num2 = 0) { //You can set default values for the parameters if nothing is passed
    return num1 + num2
}

console.log(addNums(1,2))
console.log(addNums()) // If the default values for the parameters were not set in the definition of the function then this would return NaN

// Function to arrow function - iteration 1
let addNumbers = (num1 = 0, num2 = 0) => {
    return num1 + num2
}
console.log(addNumbers(1,2))

// Function to arrow function - iteration 2
addNumbers = (num1 = 0, num2 = 0) => num1 + num2
console.log(addNumbers(1,2))

// Arrow function if there is only 1 parameter
let addFiveToNumbers = num1 => num1 + 5
console.log(addFiveToNumbers(1))

// Constructor function for Person object
function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear()
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// Instantiate person object
const person1 = new Person('Raja','Hindustani','1995-12-17T03:24:00')
console.log(person1.getBirthYear())
console.log(person1.getFullName())
console.log(person1)

//Class
//Class User and Person achieve same thing, however Class approach is more cleaner . Also the functions are added to the prototype instead of the instantiated object
// Classes were introduced in ES6
class User {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = dob
    }

    getBirthYear() {
        return this.dob.getFullYear()
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
const user1 = new Person('Ammy','Virk','1980-01-18')
console.log(user1)

//DOM
//Single element selectors
console.log(window) // whole window object
console.log(document.getElementById('my-form'))
const form = document.getElementById('my-form') // can assign the value to a variable
const container = document.querySelector('h1') // grabs the first element that matches that value that is passed
const allH1s = document.querySelectorAll('h1') // grabs all the elements that matches the value that is passed
console.log(allH1s) 

const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item.innerText))

//Changing the DOM
const ul = document.querySelector('.items')
// ul.remove() //removes the entire ul list as selected from the query selector
// ul.lastElementChild.remove() //removes the last element from the unordered list
// ul.firstElementChild.textContent = 'Wassup' // Changes the inner text for the 1st element
// ul.children[1].innerText = 'Sartaj' // Changes the innter text for the 2nd element to Sartaj
// ul.lastElementChild.innerHTML = '<b>Third</b>' // Changes the inner HTML of the last element

/*
const btn = document.querySelector('.btn')
console.log(btn)
btn.style.background = 'blue'
btn.addEventListener('click', (e) => {
    // This will override default event, which in this case as the button is a submit button the form was getting submitted to the server. This statement stops it,
    // Otherwise the form would have submitted , resetting the page and the console log that we have in the next statement we would never see it
    //e.preventDefault() 
    console.log('click')
    console.log(e.target) // This returns the button that triggered the event
    document.querySelector('#my-form').style.background = 'purple' // This will change the colour of the form
    document.querySelector('body').classList.add('bg-dark') // Adds a class to the body element
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
})

btn.addEventListener('mouseover', (e) => {
    // This will override default event, which in this case as the button is a submit button the form was getting submitted to the server. This statement stops it,
    // Otherwise the form would have submitted , resetting the page and the console log that we have in the next statement we would never see it
    e.preventDefault() 
    document.querySelector('#my-form').style.background = 'green' // This will change the colour of the form
})
*/

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()

    if(nameInput.value === '' || emailInput.value === '') { //Check if either name or email is empty
        msg.classList.add('error') // Add error class to msg div
        msg.innerHTML = 'Please enter all fields' // Set message for message div
        setTimeout(() => {
            msg.classList.remove('error')
            msg.innerHTML = ''
        }, 3000) // Set timeout so that the error div is removed from the DOM after 3 secs
    }
    else {
        const li = document.createElement('li') //Create new li element
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)) //Add text to the li element
        userList.appendChild(li) // append created li element to the user list

        //Clear fields
        nameInput.value = ''
        emailInput.value = ''
    }
}