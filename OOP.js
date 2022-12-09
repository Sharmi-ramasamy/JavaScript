// OOP _ OBJECT ORIENTED PROGRAMMING

// Creating Object - string literals

let student = {
    name:"abc",
    age:"20",
    studies:"EEE",
};
console.log(student);
console.log(student.name);

// 2nd method 

// Creating objects using the new keyword.

let student1=new Object();
student1.name='xyz';
student1.age='21';
student1.studies='ECE';
console.log(student1);


// 3. Creating an object using the constructor
function stud(name, age, studies){
    this.name = name;
    this.age = age;
    this.studies = studies;
}

var studentss = new stud("Chris", 21, "Computer Science");
console.log(studentss.name);

function students(name,age,studies) {
    this.name=name;
    this.age=age;
    this.studies=studies;
}

let Studentdetail= new students("MNO",19,"Agri");
console.log(Studentdetail);

// 4. Creating object using Constructor and class
class A{
constructor(name,age) {
    this.name=name;
    this.age=age;
}
}
let name1=new A;  // creating object and declaring it
name1="EFG";      // initializing variable
console.log(name1);


// IMPORTANT 

// class abc {                               // cannot create object inside class directly 
//     let xyz=new abc();                     // object is always created inside method or constructor.
// }

// ----------------------------------------------------------------------------------------------------//

// CLASS CREATION 

class Cars { 
    #price;    // to set it private

    constructor(name,price,maker) {
        this.name=name;
        this.#price=price;
        this.maker=maker;
    }
    details(){
        console.log(this.#price);
        console.log(car2.#price);
        return (`The name of the car is ${this.name}`);
    }
   
}

let car1=new Cars('Rolls Royce Ghost','$315k','Rolls Royce');
let car2=new Cars('XYZ Cars','$234K','ABC Company');
console.log(car1.name);
// console.log(car1.price);    // gives undefine because price is made as private
console.log(car1.details());

// -----------------------------------------------------------------------------------------------------------//

// INHERITANCE 

class Person {
    constructor(name) {
        this.name=name;
    }
    greet() {
        // console.log(`Hi ${this.name}`);               // console.log = just call - (student5.greet())
        return (`Hi ${this.name}`);                     //  return = call by console.log
    }
}

// accessed the greet() method of Student class by creating a student5 object.

class Student extends Person {                      

}
let student5=new Student("Aspire");
// (student5.greet());
console.log((student5.greet()));
console.log(student5.name);


