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

