const data={
    city:'Erode',
    special() {
        console.log(`${this.city} is known as yellow city`);
    },
    // toString() {
    //     console.log('Known for turmeric');
    // },
};
data.special();
// data.toString();

// console.log(data.toString());

console.log(Object.getPrototypeOf(data));


// SHADOWING PROPERTY

const myDate= new Date(1999,10,03);
console.log(myDate.getYear()); 
console.log(myDate.getMonth());

function getYear() {
    console.log('Year is printed');
};

myDate.getYear();


// SETTING a PROTOTYPE 

// Using Object.create

const personName= {
    wish() {
        console.log('Hi');
    },
};
// personName.wish();

const change=Object.create(personName);
change.wish();



// Creating new prototype

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
let person1 = new Person();
let person2 = new Person();

// adding new property to constructor function
Person.prototype.gender = 'Male';

console.log(person1.gender); // Male
console.log(person2.gender); // Male



// 2 example


// constructor function
function Persons (name,age) {
    this.name = name,
    this.age = age;
}

// creating objects
let person3 = new Persons('Abc',80);
let person4 = new Persons();

// adding new property to constructor function
Persons.prototype.gender = 'Male';

console.log(person3); 
console.log(person4.gender); 