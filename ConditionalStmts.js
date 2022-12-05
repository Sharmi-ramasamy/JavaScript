// if....else   

let A = 6;
let B = 10;
if (A > B) {
    console.log(" A is greater than B")
} else {
    console.log(" A is smaller than B");
}

let a = 60;
let b = 10;
if (a > b) {
    console.log(" a is greater than b")
}
console.log(" a is smaller than b");

// in this case, the second block of code is not controlled by the conditional statement,
//  so it always runs, regardless of whether the condition returns true or false.

let m = 6;
let s = 10;
if (A > B)
    console.log(" m is greater than s")
else
    console.log(" m is smaller than s");

// This syntax is perfectly valid, but it is much easier to understand the code if you use the curly braces to delimit the blocks of code, and use multiple lines and indentation.

let shoppingDone = true;
let childsAllowance;

if (shoppingDone === true) {
    console.log("childsAllowance=5")
} else {
    console.log("childsAllowance =15;");
}



// else if

let x = 100;
let y = 100;
if (x > y) {
    console.log(" x is larger than y");
}
else if (x < y) {
    console.log("x is less than y")
}
else {
    console.log("They are equal");
}

// nested  if else

let P = 10000;
let Q = 10000;
if (P = Q) {
    if (P < Q) {
        console.log(" P small");
    }
    else if (P > Q) {
        console.log("P large");
    }
    else if (P >= Q) {
        console.log("P is greater than or equal to");
    }
    else {
        console.log("check values");
    }

}

// Logical Operators
// AND operator- &&- all condition9 should satisfy

let iceCreamVanOutside = 'on fire';
let houseStatus = 'on fire';
if (iceCreamVanOutside == 'on fire' && houseStatus === 'on fire') {
    console.log('You should leave the house and ice cream van quickly.');
} else {
    console.log('Just stay in.');
}

// OR operator || - any one condition need to satisfy

let van = 'on fire';
let shop = 'on fire';
if (van == 'on fire' || shop == 'on fire') {
    console.log("Come out of shop or van")
}
else {
    console.log('Stay calm');
}

// NOT operator ! 

let bus = 'on fire';
let mall = 'on fire';
if (!(bus === 'on fire' || mall === 'on fire')) {
    console.log('Stay there safely');
}
else {
    console.log('Come Out');
}

// mixed 

let user = 'Ram';
let age = 30;
if ((user === 'ram' || user === 'Ram' || user === 'raM') && (age = 20 || age === 30 || age === 50)) {
    console.log("Valid Details");
}
else {
    console.log("Invalid Details");
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////


// SWITCH STATEMENT 

// For cases where you just want to set a variable to a certain choice of value 
//or print out a particular statement depending on a condition


let day;
switch (day=15) {
    case 1:
        console.day("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default :
        console.log("Enter the correct number");    
}


let fruits='mango';
switch (fruits) {
    case 'mango':
       console.log("Mango");
        break;
    default:
       console.log('not fruit');
}



// Conditional (ternary Operator)

//The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
// a condition followed by a question mark (?), 
// then an expression to execute if the condition is truthy followed by a colon (:),
//  and finally the expression to execute if the condition is falsy. 
// This operator is frequently used as an alternative to an if...else statement.

    // condition ? run this code : run this code instead


    let num1=10;
    let num2=50;
    let output=(num1>num2)?"num1 greater than num2" : "num1 is less than num2";
    console.log(output);
    

    let marks = 95;
    let result = (marks < 40) ? "Unsatisfactory" :
             (marks < 60) ? "Average" :
             (marks < 80) ? "Good" : "Excellent" ;
 
    console.log(result);
    
    let ageis = 60
    let results = (ageis > 59)?
        "Senior Citizen":"Not a Senior Citizen";
 
    console.log(results);


    let years=18;
    let vote=(years<18) ? "Not Eligible for vote" : "Eligible for vote";
    console.log(vote);
