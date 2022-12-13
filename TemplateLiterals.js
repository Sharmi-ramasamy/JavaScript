// Template Literals / Template Strings

const names='Aspire';
console.log(`Hello ${names}`);

const str1= 'A "quote" inside a string';
console.log(str1);
 
const str2="A single 'quote' is used inside double quote";
console.log(str2);


// mixed quotations only allowed, same quotations is not allowed


// To use same quotations inside the string, you can use the escape character \

const str3='A \'quote\' inside string';
console.log(str3);

const str4="A \"quote\" inside a string";
console.log(str4);

// instead of using escape characters,can use template literals

const str5=`Use backtick inside string`;
console.log(str5);

const str6=`This is a 'single quote' inside backtick`;
console.log(str6);

const str7=`This is a "double quote" inside backtick`;
console.log(str7);

// Multiline string using Template literals

const text=`This is a long message
that spans across multiple lines
in the code.`
console.log(text);
 
// instead of using \n and + use template literals 

const text1="This is a long message\n" +
"that spans across multiple lines\n" +
"in the code"
console.log(text1);


// Expression Interpolation

const name = 'Jack';
console.log(`Hello ${name}`); 

const result = 14 + 5;

// template literals used with expressions
console.log(`The sum of 4 + 5 is ${result}`);
console.log(`${result < 10 ? "low": "high"}`);

// The process of assigning variables and expressions inside the template literal is known as interpolation

// Raw string access

let str=String.raw`C:abc.website./^rawstring`;
console.log(str);