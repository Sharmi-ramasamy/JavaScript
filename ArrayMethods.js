// at()

let num=[100,200,3000,40000,50];
console.log(num.at(4));

// concat()

let txt=['a','b','c'];
let txt2=['d','e','f'];
let txt1=[1,2,3,4];
let total=txt.concat(txt2,txt1);
console.log(total);

let msg=['Hi'];
let add=msg.concat(['Welcome']);
console.log(add);

// let numm=[1,2];
// let nums=[3,4];
// let adds=numm.concat(nums);
// console.log(adds);
// nums[1].push(10);
// console.log(adds);


const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Array.prototype.at()

    let arr1=[100,200,300,400];
    console.log(arr1.at(1));
    console.log(arr1.at(-1));

    // Array.protype.concat()

    let arr2=[100,200];
    let arr3=['AB','CD'];
    console.log(arr2.concat(arr3));

