// Using Super KeyWord

class Person {
    constructor(name){
        this.name=name;
    }
    about(){
        return(`Her name is ${this.name}`);
    }
}

class Age extends Person {
    constructor(name,age) {
        super(name);
        this.age=age;
    }
    about1() {
        return(`Age of ${this.name} is ${this.age}`);
    }
}

class Address extends Age {
    constructor(name,age,address){
        super(name,age);
        this.address=address;
    }
    about2(){
        return(`${this.name} is ${this.age} year old girl lives in ${this.address}`);
    }
}

let personName=new Person("Diya");
console.log(personName.about());

let personName1=new Age('Diya',20);
console.log(personName1.about1());

let personName2=new Address("Diya",20,"TamilNadu");
console.log(personName2.about2());

console.log("-------- OVERRIDING ----------");

// Overriding

class PersonData {
    constructor(name){
        this.name=name;
    }
    about(){
        return(`Her name is ${this.name}`);
    }
}

class AgeOf extends PersonData {
    constructor(name,age) {
        super(name);
        this.age=age;
    }
    about1() {
        return(`Age of ${this.name} is ${this.age}`);
    }
}

class Place extends Age {
    constructor(name,age,address){
        super(name,age);
        this.address=address;
    }
    about2(){
        return(`${this.name} is ${this.age} year old girl lives in ${this.address}`);
    }
}

let personName3=new PersonData("Diya");
console.log(personName3.about());

let personName4=new AgeOf('Diya',20);
console.log(personName4.about());

let personName5=new Place("Diya",20,"TamilNadu");
console.log(personName5.about2());










