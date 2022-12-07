const data={
    city:'Erode',
    special() {
        console.log(`${this.city} is known as yellow city`);
    },
    // toString() {
    //     console.log('Known for turmeric');
    // },
};
data.special();
// data.toString();

// console.log(data.toString());

console.log(Object.getPrototypeOf(data));


// SHADOWING PROPERTY

const myDate= new Date(1999,10,03);
console.log(myDate.getYear()); 
console.log(myDate.getMonth());

function getYear() {
    console.log('Year is printed');
};

myDate.getYear();


// SETTING a PROTOTYPE 

// Using Object.create

const personName= {
    wish() {
        console.log('Hi');
    },
};
// personName.wish();

const change=Object.create(personName);
change.wish();
