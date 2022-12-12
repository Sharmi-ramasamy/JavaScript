//  you can also pass a function as an argument to a function. 
// This function that is passed as an argument inside of another function is called a callback function.

function greet(name,callback) {
    console.log('Hi' + name);
    callback();
}

// call back function

function callMe() {
    console.log('Callback function');
}

// passing function as an argument

greet('Anu',callMe)

// Output :
// Hi Anu 
// Callback function 


// BENEFITS OF CALLBACK FUNCTION

// Program with setTimeout()

function greets() {
    console.log('Hello world');
}

function names(name) {
    console.log('Hello'+' '+name);
}

// calling function

setTimeout(greets,4000);
names('Janu')

// As you know, the setTimeout() method executes a block of code after the specified time.
// The above code is executed asynchronously

// USING CALLBACK FUNCTION

// In the above example, the second function does not wait for the first function to be complete.
//  However, if you want to wait for the result of the previous function call before the next statement is executed, 
// you can use a callback function. For example,

function greeting(name,myFunction) {
    console.log('HELLO WORLD');
    myFunction(name);
}

function myName(name) {
    console.log('Hello'+" "+name);
}

setTimeout(greeting,6000,'Jani',myName)

// In the above program, the code is executed synchronously. 