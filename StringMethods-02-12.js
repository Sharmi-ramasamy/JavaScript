// Length of String
let text="LAMP";
console.log('Length:'+ text.length);

// character access
console.log('first character:'+ text[0]);     // string treated as array-like object, access by index number
console.log(text.charAt(2));                 // using charAt

// charAt eg 2
let get="car";
got=get.charAt(1);
console.log(got);

// reverse character access
console.log('Length:'+ text[text.length-1]);

// test on presence of substring in string

let dep="REACTJS";
console.log(dep.includes("ACT"));

const sub="JavaScript";
if (sub.includes("Java")){
    console.log("Given string exists");
}
else {
    console.log("Not exist");
}

let check="GOOGlE";
let check1=check.startsWith("GO");
console.log(check1);

let test="Chrome"
if(test.endsWith("om")) {
    console.log("Ends with given character");
}
else {
    console.log("Wrong Character");
}


// indexof()

let search="The Indian Express";
let find=search.indexOf("Express");
console.log(find);
let find1=search.indexOf("xpress");
console.log(find1);
let find2=search.indexOf("Oxpress");
console.log("No occurence:" + find2);   // returns -1 if not present

// to find Subsequent Occurence 
let word="best of best of best";
let go=word.indexOf("best");
let repeat=word.indexOf("best",go+1);
console.log(go);
console.log(repeat);
console.log(word.indexOf("best",repeat+1));


// Extracting substring from string - slice()

let divide="OUTLOOK";
console.log(divide.slice(0,3));
console.log(divide.slice(3));

// Changing case

let myName="What Is YouR NamE";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// Updating Parts of String

let data="Mozilla of Mozilla";
data=data.replace('Moz','Van');
console.log(data);              // replace only first one

// Inorder to update all occurence use replaceAll()

let change="To be or not to be";
change=change.replaceAll('be','code');
console.log(change);

// without updating orginal text, changing it temporarily iin another variable

let items="Google";
let modify=items.replace('Go','To');
console.log(modify);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// creating string

 // a. String primitive & string object
 const string1=new String("Aspire - String Object");       // new keyword is used 
 console.log(string1);
 
 const string3=String("I am also String Primitive");
 console.log(string3);
 
 const string2="I am String primitive";
 console.log(string2);
 
 // b. eval()- treat the data as code 
 
 const s1 = "2 + 2"; // creates a string primitive
 const s2 = new String("2 + 2"); // creates a String object
 console.log(eval(s1)); // returns the number 4
 console.log(eval(s2)); // returns the string "2 + 2"
 
 // In eval String Object can be get converted into String primitives by using valueOf() method
 const s3=new String("3+3");
 console.log(eval(s3.valueOf()));
 
 // Character Access - charAt & index value
 
 let name="Aspire Systems";
 console.log(name[1]);
 console.log(name.charAt(12));
 
 //  Long Literal Strings
 
 const longString =
   "This is a very long string which needs" +
 "to wrap across multiple lines because" +
 "otherwise my code is unreadable";
 console.log(longString);
 
 // instead of using + operator to add the long string together 
 // use backslash operator (\)
 // at the end of each line to indicate that the string will continue on the next line. 
 // Make sure there is no space or any other character after the backslash ie,
 
 const longString2=
   "\'This is a very long string which needs " +
   "to wrap across multiple lines because " +
   "otherwise my code is unreadable.\'";
   console.log(longString2);
 
 
   