// The spread operator (...) is used to expand or spread an iterable or an array.

const arrValue=['My','name','is','ABC'];
console.log(arrValue);    // [ 'My', 'name', 'is', 'ABC' ]
console.log(...arrValue);      // My name is ABC

const arr="Welcome to Aspire Systems";
console.log(...arr);

// Copy Array Using Spread Operator

const arr1=['one','two'];
const arr2=[...arr1,'three','four','five'];
console.log(arr2);
// [ 'one', 'two', 'three', 'four', 'five' ]

// clone Array Using Spread Operator

let arr3=[1,2,3,4];
let arr4=arr3;

console.log(arr3);    // [1,2,3,4]
console.log(arr4);    // [1,2,3,4]

// push(append) an item to the array

arr3.push(5);

console.log(arr3);      // [1,2,3,4,5]
console.log(arr4);      // [1,2,3,4,5]

// Here, both variables arr1 and arr2 are referring to the same array. Hence the change in one variable results in the change in both variables.

// By using spread operator, the change in one array is not reflected in the other

let arr5=[100,200,300,400,500];
// copying using spread operator inside []
let arr6=[...arr5];
console.log(arr5);      // [100,200,300,4000,500]
console.log(arr6);      // [100,200,300,4000,500]

// append an item in arr5 but this change does not affect in arr6

arr5.push(600,700,800);

console.log(arr5);      // [100,200,300,400,500,600,700,800]
console.log(arr6);     // [100,200,300,400,500]

// SPREAD OPERATOR WITH OBJECT

const obj1={x:"a", y:"b"};
const obj2={z:"c"};
const obj3={...obj1, ...obj2};
console.log(obj3);          // { x: 'a', y: 'b', z: 'c' }

