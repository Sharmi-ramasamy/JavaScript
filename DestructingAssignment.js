// Destructuring is the act of unpacking elements in an array or object.
// it also gives you the power to manipulate and switch elements you unpacked depending on the type of operation you want to perform.
// destructing assignment that allows you to destructure properties of an object or elements of an array into individual variables.


// Destructing in Arrays

const colour=['green','pink','orange','red','blue'];
const[first,second]=colour;
console.log(first,second);                          // green pink


// Normal way 

const name=['abc','xyz','mno'];
let name1=name[0];
let name2=name[1];
let name3=name[2];
console.log(name1);
console.log(name2);
console.log(name3);

function scores() {
    return[60,80,90];
}
let getScores=scores();
let a=getScores[0];
let b=getScores[1];
let c=getScores[2];
console.log(a);
console.log(b);
console.log(c);

// there was no direct way to assign the elements of the returned array to multiple variables such as x, y and z in normal case.


// By using destructing assignment

let names=["ABC","XYZ","MNO"];
let[names1,names2,names3]=names;
console.log(names1);
console.log(names2);
console.log(names3);

// need only car and bus leave truck by comma

let vechiles=['swift','truck-90','TTS'];
let [car,,bus]=vechiles;
console.log(car);
console.log(bus);

function color() {
    return['grey','black','indigo','navyblue']
}
let [x,y,z]=color();
console.log(x);
console.log(y);
console.log(z);

// The variables x, y and z will take the values of the first, second, and third elements of the returned array.

// Note that the square brackets [] look like the array syntax but they are not.


function engmarks() {
    return[20,30];
}
let [m,n,o]=engmarks();
console.log(m);
console.log(n);
console.log(o);     // undefined

// engmarks() function returns array of two elements,the third variable will be undefined

let ssmarks=[65,75,85,95,100];
let[fourthrank,thirdrank,secondrank,firstrank]=ssmarks;
console.log(fourthrank);
console.log(thirdrank);
console.log(secondrank);
console.log(firstrank);

//  the function ssmarks() function returns an array that has more than three elements,the remaining elements are discarded

// ARRAY DESTRUCTING ASSIGNMENT AND REST SYNTAX

// It’s possible to take all remaining elements of an array and put them in a new array by using the rest syntax (...):
let mathmark=[900,800,700,600];
let[A,B,...spread]=mathmark;
console.log(A);           // 900
console.log(B);           // 800
console.log(spread);      // [700,600]


let X,Y;
[X,Y]=[896,986];
console.log(X);         // 896
console.log(Y);         // 986


// SETTING DEFAULT VALUES

let items=[150,200,250,300];
let getitems=items;
let nextitem=getitems[4]!=undefined ? items[4]:0;
console.log(nextitem);

let colors=['darkgreen','lightgreen','green','paleyellowgreen'];
let getcolors=colors;
let displaycolor=getcolors[2]==='green' ? console.log("Required color:" +  getcolors[2]) : console.log("no match");


// If the value taken from the array is undefined, you can assign the variable a default value,
let M,N;
[M = 1, N = 2] = [10];
console.log(M); // 10
console.log(N); // 2

// SWAPPING VARIABLES

// The array destructuring makes it easy to swap values of variables without using a temporary variable:

let one='ONE';
let two='TWO';
[one,two]=[two,one];
console.log('one is:'+one);
console.log('two is:' + two);

//  Functions that return multiple values

function calculate(Num1,Num2) {
    let add=Num1+Num2;
    let sub=Num1-Num2;
    let multiply=Num1*Num2;
    let divide=Num1/Num2;
    return[add,sub,multiply,divide];
}
const [add,sub,multiply,divide]=calculate(2,4)
console.log(add);
console.log(sub);
console.log(multiply);
console.log(divide);


// Destructing object


const shoe= {
    type:'formal',
    color:'black and white',
    year:'2020',
    brand:'Walkaroo'
}
 let buy={type,color,year:manufacturedyear,brand,other:size=9}=shoe
 console.log(type);
 console.log(color);
 console.log(manufacturedyear);
 console.log(brand);
 console.log(size);
