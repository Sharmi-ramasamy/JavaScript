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

// without updating orginal text, changing it temporarily in another variable

let items="Google";
let modify=items.replace('Go','To');
console.log(modify);


