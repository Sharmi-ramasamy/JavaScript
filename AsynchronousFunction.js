// setTImeout()

// The setTimeout() method executes a block of code after the specified time.
// The method executes the code only once.

// SYNTAX- setTimeout(function,milliseconds)

let name= "abc"
console.log('Hi'+ " " + name);

function display() {
   console.log("Hello");
}
setTimeout(display,3000);
console.log("Executes first");


// The setTimeout() method returns the interval id

console.log("-------------- sets the interval Id -------------------------");

function wish() {
    console.log('Greetings');
}
let intervalId= setTimeout(wish,4000);
console.log('Id' + " " + intervalId);


// ------------------------------------------------------------------------------------------------------\

console.log('-------------- clearTimeout()----------------------');

function clickCount() {
    for(var i = 1; i < 100; i ++) {
        console.log(i);
    }
    
}
clickCount();

let id=setTimeout(clickCount,9000);

// the program executes a block of code after the specified time interval. 
// If you want to stop this function call, you can use the clearTimeout() method. 

clearTimeout(id);
console.log('setTimeout is Stopped');

// generally use the clearTimeout() method 
// when you need to cancel the setTimeout() method call before it happens.


// -------------------------------------------------------------------------------------------------------

// Passing additional parameters

// You can also pass additional arguments to the setTimeout() method. 

// Syntax - setTimeout(function, milliseconds, parameter1, ....paramenterN);

console.log('-------------- Passing additional arguments/parameters -----------------------');

let names='Aspire';
console.log(names);

function greetings(fname,lname) {
    console.log('Hi'+ " " + fname + " "+lname);
}
 
// passing arguments 

setTimeout(greetings,8000,'Aspire','Systems')

// ---------------------------------------------------------------------------------------------------------------

