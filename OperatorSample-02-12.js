const myInt=27;
const myFloat=5.2;
console.log("Float:" + myFloat);
console.log('Type:' + typeof myInt);

// toFixed()

let myDecimal=2.75127515127;
console.log("Round off fixed to 2 decimal point:" + myDecimal.toFixed(2));

// string to number - Number()

let num="27";
// myNumber=Number(num);
// console.log('String to number:' + myNumber);
console.log('String to number:'+ Number(num));

let numb="27";
myNumbers=Number(numb) + 25;
console.log('Total:' + myNumbers);


// Arithmetic Operators - Exponent
let exp=Math.pow(5,2);
console.log(exp);

let exp1=5**2;
console.log('Another Way:' + exp1);

// Increment & Decrement Operators

let num1=26;
console.log('Increment:' + num1++);   // don't practise 26++

// Assignmet Operator 

let num2=5
let num3=8;
let total=num2*=num3
console.log('value:' + total);




