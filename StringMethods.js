// let greet="  Hello Welcome!!  " ;
// console.log(greet.trim());
// console.log(greet.trimEnd());
// console.log(greet.trimStart());

 // at() method

 let sentence="Aspire Systems";
 console.log("Using at() method:"+ sentence.at(-2));

 // charAt() method

 let sentence1="Aspire Systems";
 console.log("Using charAt() method:"+ sentence1.charAt(1));
 console.log("Using charAt() and length method:"+ sentence1.charAt(sentence.length-2));

 // charCodeAt() 

 let sentence2='Aspire Systems';
 console.log("Using charCodeAt():"+ sentence2.charCodeAt(0));

 // codePointAt()
 let sentence3='Aspire Systems';
 console.log("Using codePointAt():"+ sentence3.charCodeAt(sentence.length-1));

 // concat()
 let sentence4="Aspire";
 let sentence5="Systems";
 console.log("Using concat():" + sentence4,sentence5.concat());

 // endsWith()
 let sentence6="Aspire Systems";
 console.log("Using endsWith():" + sentence6.endsWith("Systems"));

 // startsWith()
 let sentence7="Aspire Systems";
 console.log("using of startsWith():" + sentence7.startsWith("aspire"));        // case sensitive

// includes()
let sentence8="Aspire Systems";
let string="sp"
// console.log("Using includes():" + sentence8.includes("Aspire"));
console.log(`The sentence include ${string} ${sentence8.includes(string)? 'correct' : 'not correct'}`);

//indexOf()
let sentence9="Aspire System";
word="p";
console.log(`The index of ${word} is ${sentence9.indexOf(word)}`);

//lastIndexOf
let sentence10="best of best";
word2="best";
console.log(`The last occurence of the word ${word2} is ${sentence10.lastIndexOf(word2)}`);

// repeat()

let sentence11="I\'m fine,";
console.log(`Repeat the sentence ${sentence11} 10 times: ${sentence11.repeat(10)}`);

// replace()

let sentence12="Mozilla with Mozilla";
console.log(`replace the word ${sentence12} as ${sentence12.replace('Moz','Van')}`);

// replaceAll()
let sentence13="Mozilla with Mozilla";
console.log(`replace the word ${sentence12} as ${sentence13.replaceAll('Moz','Van')}`);


// slice()
let sentence14="Aspire Systems";
console.log(`Slice the word, first three character ${sentence14} : ${sentence14.slice(0,3)}`);

// split()
let sentence15="Aspire Systems";
let specword=sentence15.split(' ');
console.log(specword[1]);               // prints word

let char=sentence15.split('');
console.log(char[2]);                   // prints letter 

let strCopy=sentence15.split();
console.log(strCopy);                   // copy the string

// substring()

let strs="Aspire Systems";
console.log(strs.substring(1));
console.log(strs.substring(1,6));

// toString()

let str=new String("Aspire Systems");
console.log(str);
console.log(str.toString());
console.log(typeof str);

const dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); // Rocket,Flash,Bella,Slugger
console.log(dogNames);
console.log(typeof dogNames);

// trim()

let greet="   Hello World....  ";
console.log(greet.trim());

console.log(greet.trimEnd());

console.log(greet.trimStart());


// padEnd()

let padAtEnd='Aspire Systems';
console.log(padAtEnd.padEnd(25,'*'));
let num="2752";
console.log(num.padEnd(6,"@"));                 // if not character mentioned it will leave a white space

let padAtStart='Aspire Systems';
console.log(padAtStart.padStart(28,"#"));


// toUpperCase()

let convert="aspire System";
console.log(convert.toUpperCase());

// toLowerCase()

let convert1="ASPIre Systems";
console.log(convert1.toLowerCase());