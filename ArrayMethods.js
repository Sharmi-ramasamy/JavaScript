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

    

    var arr=[1,2,3,4,5,67,8];
    // arr.push(34);

    // var c=arr.push(68);
    // console.log(arr);
    // console.log(c);

//     arr.pop();

//    console.log(arr);

// var b= arr.pop();
// console.log(b));

arr.unshift(78);
console.log(arr);
b=arr.unshift(65);
console.log(b);
console.log(arr);

////////////////////////////////////////////////////////////////////////////

// Array.prototype.at()

let arr1=[100,200,300,400];
console.log(arr1.at(1));      // 100
console.log(arr1.at(-1));     // 400

// Array.prototype.concat()

let arr2=[100,200];           //100,200,AB,CD
let arr3=['AB','CD'];
console.log(arr2.concat(arr3));

// Array.prototype.fill()

let arr4=[1,2,3,4,5,6];
console.log(arr4.fill(0,2,5));         // fill with 0 from 2 to 4
              // [1,2,0,0,0,6]   
console.log(arr4.fill(10,3));       // fill 10 from 3 to end
            // [1,2,0,10,10,10]
console.log(arr4.fill(9));           // fill all with 9
            // [9,9,9,9,9,9]


// Filter()

const words = ['spray', 'limit', 'elite', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

// find()

const arr5=[100,125,189,567];
let found=arr5.find(element=> element > 120);
console.log(found);
let found1=arr5.find(element=> element > 620);
console.log(found1);

// The find() method returns the first element in the provided array that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned


// includes()

const arr6=[123,456,789,321,654,987,123];
console.log(arr6.includes(321));
console.log(arr6.includes(368));

// indexOf()
 // prints the index value of given data 
 // if not found prints -1

 console.log(arr6.indexOf(234))   // -1
 console.log(arr6.indexOf(123,2));   // second occurence

// join()

let arr7=['fire','water','air'];
console.log(arr7.join(' '));
console.log(arr7.join());
console.log(arr7.join('-'));

// keys()

// let arr8=['A','B','C'];
// let assign=arr8.keys();

// lastIndexOf()

let arr9=[1,2,5,7,89,4,1,3,6,7,46,86];
console.log(arr9.lastIndexOf(1));

// push()

let flowers=['rose','jasmine','lotus'];
let adds=flowers.push('lily','sunflower','mariegold');
console.log(flowers);

// pop()

let animal=['cat','tiger','dog','Dino'];
let move=animal.pop();
console.log(animal);      


// shift()

let element=[124,4668,678,904];
const store=element.shift();
console.log(element);                 // removes first element - 124


// unshift()   - adds elements

let sum=[453,657,897,9087];
let storage=sum.unshift(896,5678,37897);
console.log(sum);                           // add the given elements at the begining of the array

// slice()

let birds=['duck','parrot','dove','woodpecker','humming bird','kingfisher'];
console.log(birds.slice());
console.log(birds.slice(3));
console.log(birds.slice(2,6));
console.log(birds.slice(-1));
console.log(birds.slice(2,-1));


// sort()   - default ascending order

let day=['sunday','monday','tuesday','wednesday','friday','saturday'];
console.log(day.sort());

let ascen=[12.345,7869,100000];
console.log(ascen.sort());


// toString()

let str=[1,8,'msp','ps',2752];
console.log(str.toString());

// values()

// let val=['AB','CD','EFG'];
// console.log(val.values());