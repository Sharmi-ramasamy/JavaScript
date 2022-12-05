let sample=['name',20,[1,'age']]    // can mix different data types in single list
console.log(sample);

// to find length

console.log(sample.length);

// Accesing and modifying array items

console.log(sample[0]);             // accessing items

sample[1]="27";
console.log(sample);                //modifying item 2 in sample list  - index number counts from zero

// Multidimensional Array - array inside another array

let number=[10,20,30,40,[50,60,70,80,90,100]];
let num=number[3];
console.log(num);
let access=number[4][3];
console.log(access);

// index of an item

let flower=['Rose','Marigold','Lily'];
console.log("index value of lily:"+ flower.indexOf('Lily'))

// adding items -push()

add=flower.push('Lotus','shoe flower');
console.log("Items added:" + flower);


// new length

let ani=['cat','rat','bat'];
console.log("length:"+ ani.length);

let updated=ani.push('lion','monkey');
console.log(updated);
console.log("updated list:" + ani);

ani.unshift('zebra');           // to add items on the start of the array use unshift()
console.log(ani);


// Removing items

let birds=['parrot','eagle','peacock','dove','cuckoo','pigeon'];
birds.pop();     // removes the last element when not mentioned
console.log(birds);

// let move=birds.pop('eagle');
// console.log(move);

// to remove first element - shift()

birds.shift();
console.log(birds);

// splice()

//he splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
// To access part of an array without modifying it use ------- slice().



let digit=[100,200,300,400,500];
digit.splice(1,0,150);
console.log(digit);                 // before index 1- remove 0 element and insert 150 - 100,150,200,300,400,500

let digit1=[100,700,400,500];
digit1.splice(1,2,200,300);          // at index 1 - remove 2 element from index 1  - insert 300 & 400
console.log(digit1);                   // 100,200,300,500

let digit2=[1,2,8,9,3,4,5];
digit2.splice(2,2);                // removes 2 element from index 2 ( removes 8 & 9)
console.log(digit2);

let num1=[1,2,3,4,5,7,8];
num1.splice(-1,1,100,200);             // removes 1 element in reverse order first element and insert 100 & 200
console.log(num1);                  // 1,2,3,4,5,7,100,200

let num2=[5,10,15,20,25,30,35,40];
num2.splice(2);                         // remove all elements from index 2 including index 2
console.log(num2);                      // 5,10



// accessing every item    - for( variable 2ndvariablename of 1stVariableName { console.log(2ndvariablename)} )

let colors=['pink','green','orange','black','blue'];
for(let accessvariable of colors){
    console.log(accessvariable);
}


// map()

let arr=[1,2,3,4];
let map=arr.map(x=>x*2);
console.log(map);

let arr1=[25,16,4];
let map1=arr1.map((arr1)=>Math.sqrt(arr1))
console.log(map1);


function double(number) {
    return number * 2;
  }
  const numbers = [5, 2, 7, 6];
  const doubled = numbers.map(double);
  console.log(doubled);  
  
  // filter()

  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



function isLong(city) {
    return city.length > 8;
  }
  const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
  const longer = cities.filter(isLong);
  console.log(longer);  // [ "Liverpool", "Edinburgh" ]
 

  // converting between string and arrays    - join()

  let elements=['air','water','fire'];
  console.log(elements.join());
  console.log(elements.join(' '));
  console.log(elements.join('-'));

  // toString()

  let txt=['Hi','Hello','Welcome'];
  console.log(txt.toString());