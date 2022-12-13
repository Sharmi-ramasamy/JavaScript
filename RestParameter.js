// When the spread operator is used as a parameter, it is known as the rest parameter.

// You can also accept multiple arguments in a function call using the rest parameter.

let myfunc=function(...args) {
    console.log(args);
}
myfunc(30);         // [30]
myfunc(100,150,200,250,300);    // [100,150,200,250,300]

// When a single argument is passed to the func() function, the rest parameter takes only one parameter.
// When five arguments are passed, the rest parameter takes all five parameters.

// NOTE: Using the rest parameter will pass the arguments as ARRAY elements.



// can also pass multiple argument to a function using spread operator

// normal function

function sum(x,y,z) {
    console.log(x+y+z);
}
sum(1,8,9);             // 18

// multiple argument in spread operator
// If you pass multiple arguments using the spread operator, the function takes the required arguments and ignores the rest.

function add(a,b,c) {
    console.log(a+b+c);
}
const num2=[7,9,80,90,768];
add(...num2);



