// This allows us to give default values to function parameters

function sum(x=3,y=9) {
    return x+y;
}
console.log(sum(10,90));
console.log(sum(4));
console.log(sum());

// Using expression as default values

function add(a=1,b=a,c=a+b) {
    console.log(a+b+c);
}
add();

// f you reference the parameter that has not been initialized yet, you will get an error
// cannot access 'n' before initialization

// function diff(m=n,n=2) {
//     console.log(m-n);
// }
// diff();                          // error


// Passing Function Value as Default Value

const sums = () => 15;

const calculate = function( X, Y = X * sums() ) {
    return X + Y;
}

const result = calculate(10);
console.log(result);            // 160


// Passing undefined value

// when you pass undefined to a default parameter function, the function takes the default value.

function test(p=10) {
    console.log('p value is:'+p);
}
 // passing undefined
 // takes default value 10

 test(undefined);