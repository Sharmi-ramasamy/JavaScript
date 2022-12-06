   //  Functions - Reusable code 
   // Another essential concept in coding is functions,
   //  which allow you to store a piece of code that does a single task inside a defined block, 
   // and then call that code whenever you need it using a single short command — 
   // rather than having to type out the same code multiple times.


   // Build-in browser function

   const myNumber = Math.random(1,2);
   console.log(myNumber);

// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number

const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
console.log(newString);                                         // manipulated a text string,

const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
const madeString = myArray.join('');
console.log(madeAString);
console.log(madeString);                                       // manipulate an array

// we use the build in browser function upto now    


// INVOKING FUNCTION 
// function myFunction() {
//    let print= alert('hello');
//    console.log(print);
//   }
//   myFunction();
 
//   myFunction();


//  This form of creating a function is also known as function declaration


function circumference(radius){
   return 2*Math.PI*radius
}
  console.log(Math.PI);
  console.log(circumference(10));                  // passing parameters


  // Fuctional parameters

  let txt="Mozilla";
  console.log(txt.replace('Moz','Van'));

  // optional parameters

  let list=[1,2,3];
  console.log(list.join(" "));
  console.log(list.join());                        

  // Default parameter

  function greet(name="Aspire") {
   console.log(`Welcome to ${name}`);
  }
  greet('Aspire Systems');
  greet();


  // Type of Functioons - function declaration/call back function , anonymous function/function expression & arrow function

  // CALL BACK FUNCTION / FUNCTION DECLARATION 
  // with function and function name and not contain semi colon at the end of the block of code

// examples to add
  function myFunction(a,b) {
   let c=a+b;
   console.log('Add:' + c);
  }   // there is no semicolon here
  myFunction(5,2);

//   function add(A,B) {
//    return (A*B);
//   }
//   console.log(add(5,8));
 

// Anonymous function / function expresssion

// ANONYMOUS FUNCTION - function without function name and contains semi colon at the end of the block of function code



//A function expression of an anonymous function assigned to the variable getArea:

let getArea=function(width,height) {
   return width*height;
};
console.log(getArea(2,3));


// anonymous function also recieve another function as parameter

// A function expression of a function named funcName assigned to the variable multiply:


// const multiply = function funcName(x, y) {
//    return x * y;
//  };
//  console.log(multiply(4,4));


 function one() {
   console.log('Hi');
  
   function two() {
      console.log('Hello');
       return 'Welcome' ;
   }
      return two()
 }

// one();
//  console.log(one());     
 const store=one();             // one() indicates that it will store the return type 
 console.log(store);
 

function three() {
   console.log('Aspire');
   function four() {
      console.log('Systems');
      return 'Aspire Systems'
   }
   return four()
}
// // three(); 
// // return three();
// console.log(three()); 
const five= three();
console.log(five);

function fun() {
   console.log('Lamp');
   function fun1() {
      console.log('React');
   }
   return fun1();
}
 fun();


function num() {
   console.log('one');
}
num()
function num1() {
   console.log('two');
}
num1();

const num6=num1;
num6();





