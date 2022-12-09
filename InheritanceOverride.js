
class Person { 
    constructor(name) {
        this.name = name;
        this.occupation = "unemployed";
    }
    
    greet() {
        console.log(`Hello ${this.name}.He is ${this.occupation}`);
    }
 
}

class Student extends Person {
    constructor(name) {
        super(name);
        
        // Overriding an occupation property
        this.occupation = 'Student';                            // comment this. so that occupation=umemployed
    }
    
    // overriding Person's method
    greet() {
        console.log(`Hello student ${this.name}.`);
        console.log('occupation: ' + this.occupation);           // 
    }
}

let p = new Student('Jack');
p.greet();

// Example 2

console.log("--------- Example 2 -------------");

class Data {
    constructor(name){
        this.name=name;
        this.occupation="Staff";
    }
    greet() {
        return(`His name is ${this.name} & he is a ${this.occupation}`)
    }
}

class Details extends Data {
    constructor(name){
        super(name);
        this.name='abc'
        this.occupation="Student";
    }
    // greet() {
    //     return(`Role of ${this.name} is ${this.occupation}`)
    // }
}

let names=new Details("MS");
console.log(names.greet());


console.log('--------Overloading---------------');



// Normal unction

function funcs(x,y) {
    return x*y;
 }
 function funcONE(z) {
    return z;
 }

 console.log(funcs(5,3));
 console.log(funcONE(5));

// javaScript does not support overloading 

console.log("-------------- OVERLOADING - Not Possible -------------------");

// EXAMPLE FOR METHOD OVERLOADING

function func1(x,y) {
    return x*y;
 }
 function func1(z) {
    return z;
 }

 console.log(func1(5,3));
 console.log(func1(5));
