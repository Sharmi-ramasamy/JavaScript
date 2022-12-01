let message = "Hello";
console.log("Message is:" + message);

let msg = "Welcome";
count = "4";
console.log("Prints msg and count", msg, count);

let number = "789";
number = "90809";
console.log("Updates the value:" + number);

let name;
console.log("Name is:" + name)

// let num="789";
// let num="90809";
// console.log("Throws error:" + num);
// cannot declare, can update-redefine


// BLOCK SCOPE - within block or function

function info() {
    let text = "Greetings"
    console.log(text);
}
info();


function digit() {
    let a=345;
    let b=689;
    function numeric() {
        let a=20;
        let b=60;
         console.log("prints values in numeric() function");
        console.log("a:" + a);
        console.log("b:" + b);
    }
    numeric();
}
digit();

// function digit() {
//     let a = 345;
//     let b = 689;
//     function numeric() {
//         let a = 20;
//         let b = 60;
//     }
//     numeric();
//     console.log("Prints values in digit() function:");
//     console.log("prints ");
//     console.log("a:" + a);
//     console.log("b:" + b);
// }
// digit();


// function digit() {
//     let a = 345;
//     let b = 689;
//     function numeric() {
//         let a = 20;
//         let b = 60;
//     }
//     numeric();
// }
// digit();
// console.log("Reference Error Occurs");
// console.log("a:" + a);
// console.log("b:" + b);

// let a=9;
// let b=98;
// function digit() {
//     let a = 345;
//     let b = 689;
//     function numeric() {
//         let a = 20;
//         let b = 60;
//     }
//     numeric();
// }
// digit();
// console.log("prints the starting variables");
// console.log("a:" + a);
// console.log("b:" + b);


// const pi;
// pi=3.14;        
// must initialize at the time of declaration

const pi=3.14;
console.log("pi:" + pi);
// no redecalration and update in const variable



function numbers() {
    const text="Hi";
    const msg="Hello";
    function num() {
        const a=20;
        const b=60;
         console.log("prints values in numeric() function");
        console.log("a:" + a);
        console.log("b:" + b);
    }
    num();
    console.log("text:" + text);
    console.log("msg:" + msg);
   
}
numbers();

// Block level - const and let  Variables

