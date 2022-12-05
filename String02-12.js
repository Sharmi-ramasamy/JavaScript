let text='Hi';
console.log(text);

// Combination of single and double 
const msg1='How are "you"?';
const msg2="I'm fine,thanks";
console.log(msg1);
console.log(msg2);

// Escaping Characters
const msg3= 'I\'m fine...';
const msg4="Isn\'t"
console.log(msg3);
console.log(msg4);

// Escape Sequence 2

let eg1="I make the sentence into \n 'new line'";      // use of \n - new line
console.log(eg1);


// Template Literal  - using of backtick `text: ${}`

const name="Anu";
const txt=`Hi:${name}`;
console.log(txt);

let txt1="cheese";
let txt2="butter";
let join=`${txt1}${txt2}`;
console.log(join);

let txt3="Hi";
let txt4="all";
console.log(txt3+" "+txt4);

// Number and String

let txt5=2;
let txt6="butter";
let joins=`${txt5} ${txt6}`;
console.log(joins);


let num="27";
console.log(Number(num));

let myName=123;
let result=myName.toString();
console.log(result);
console.log(typeof result);


// Multiline Strings - line break character \n
let samp="Hi \nHow are you?";
console.log(samp);


// Example

let exam1="Maths";
let score=91;
let exam2="SS";
let ssScore=80;
let max=100;
let output=`Mark Scored in ${exam1} is ${score}`
let percent=`percentage of mark scored in ${exam1} and ${exam2} is ${score+ssScore/200}%`
console.log(output);
console.log(percent);


