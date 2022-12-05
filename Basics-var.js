console.log("hi");

// VARIABLE- var

//   declaration and initialization
var number=89;
console.log("The number is:" + number);

// Can redeclare the data
var num=100;
var num=345;
console.log("The num is:" + num);

// update
var message="Hi";
message='bye';
console.log("Changes form Hi to Bye: " + message)

// If not initialize : undefined error
var msg;
console.log("The msg is:" + msg);

// Assign diff value to variable
 var message="hello",
     count="8";
     console.log("Message and count get print here...." , "Message:"+ message, "Count:" + count)

// Using function - prints local and global variable
function myFunction() {
    var num=27;
    console.log(num);  // prints local value bcoz console inside functiton
}
myFunction();       // calling function
console.log(num);     // prints global value

// using function inside another function

function myFunc () {
    var x=20;
    var y=40;
    function func() {
        var x=2020;
        var y=4090;
        // console.log("x:",x);
        // console.log("y:" , y);
    }
    func();
    console.log("Prints global variable")
    console.log(x);
    console.log(y);
}
myFunc();

// // prints local variable
// function myFunc () {
//     var x=20;
//     var y=40;
//     function func() {
//         var x=2020;
//         var y=4090;
//         console.log("2. Prints local variable")
//         console.log("x:",x);
//         console.log("y:" , y);
//     }
//     func();
// }
// myFunc();


// you can actually declare a variable with var after you initialize it and it will still work.
myName = 'Chris';

function logName() {
  console.log(myName);
}

logName();

var myName;                     // var HOISTING
console.log(typeof myName);    // to find the type of data- typeof is used




var p=1;
function nums(){
    var p=s=2;
}
nums();
console.log(p,s);
console.log("Type Of P is:" + typeof(p));

// variables can be numbers,strings,booleans

// Booleans 

let test = 1 < 3;
console.log("Given condition is :" , test);


// Array

let myNameArray=['M','S','P'];
let myNumArray=[1,2,3];
console.log("Name Array:" + myNameArray);
console.log("Num Array:" + myNumArray);
console.log("first name is:" + myNameArray[0]);
console.log("second number is:" + myNumArray[1]);
console.log("Type:" + typeof(myNameArray));
console.log("Type:" + typeof(myNumArray));

// Objects

let data={name:"XYZ" , weight:50};
console.log("name:" + data.name);