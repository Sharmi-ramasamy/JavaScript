const data={};
console.log(data);

const details={
    name:{fname:'Aspire',lname:'Systems'},     // property
    place:'Siruseri',                          // property
    bio: function() {                         // anonymous function  - method
        return `${this.name.fname} ${this.name.lname} is located in ${this.place} `;
    },
    desc: function() {                                                
        console.log(`I\'m working at ${this.place}`);
        // return is needed so then only function get defined
        // return `I\'m working at ${this.place}`; 
    },
};
console.log(details.name);
console.log(details.name.fname,details.name.lname);
console.log(details.place);
console.log(details.bio());
details.desc();


console.log('----------------- Example 2 --------------------');

const study ={
    sub:['Maths','Science'],
    std:'Xth',
    age:14,
    teach: function() {
        return ` I like ${this.sub[0]} & ${this.sub[1]}.`;
    },
    staff() {      // instead of staff: function() can write staff()
        return `In class ${this.std} my favourite sub is ${this.sub}.`;
    },
};

console.log(study.sub[0],study.sub[1]);
console.log(study.teach());
console.log(study.staff());
// console.log(study)

let jsondata=JSON.stringify(study);

console.log(jsondata);                          // changes to string - data
console.log(JSON.parse(jsondata));              // changes to object

// ------------------------------------------------------------------------------------------------------------------------

                                               // Object as object properties 

const organization={
    name: {
        fname:'Aspire',
        lname:'Systems',
    },
};
console.log(organization.name.fname);
console.log(organization.name.lname);


const result= {
    sub:['English','Science'],
    score:["90","85"],
};
console.log(result.sub[1]);
console.log(`score of ${result.sub[1]} is ${result.score[1]}`);

// ----------------------------------------------------------------------------------------------------------------------------------------------

                                                // BRACKET NOTATION

let number= {
    0:"zero",
    1:"one",
    2:"two",
    "hey-hi":()=>{
        console.log('sucess');
    },
    '  ':'hello'
};
console.log(number[0]);
console.log(number[1]);
number["hey-hi"]()
console.log(number["  "]);


// Example 2

let person ={
    name:["Dev","Diya"],
    age:20,
    location: {
        loc1:'Erode',
        loc2:'Cbe',
    },
};
console.log(person['name'][0]);
console.log(person['location']['loc1']);

// ----------------------------------------------------------------------------------------------------------------

                                                  // calling with function

const num={
    num1:290,
    num2:390,
    num3: ['200','300']
};
    function myfunc(numvalue) {
        console.log(num[numvalue]);
    }
    myfunc("num1");
    myfunc("num2");
// -----------------------------------------------------------------------------------------------------------------

                                         // Setting Object Members

    // it can be used to change member values

    console.log(num.num1=500);
    console.log(num.num3[1]=7890);
    console.log(num);

// --------------------------------------------------------------------------------------------------------------
                            // create new property and method inside existing object

    num["num4"] = "wholenumber";
num.myfunction = function () {
//   console.log("Mathematics!");
 return "Mathematics!";
};
console.log(num.num4);
console.log(num.myfunction());
// num.myfunction();
console.log(num);

// -------------------------------------------------------------------------------------------------------------
                                   // creatng new property to a existing object 2

const sub={
    sub1:'English',
    sub2:'Malayalam',
    sub3:'Tamil',
};
const mysub='sub4';
const subvalue='Hindi';
sub[mysub]=subvalue;

console.log(sub.sub4);
console.log(sub);


// -------------------------------------------------------------------------------------------------------------

                                        // this Keyword
                                        

const sub1={
    subname:'English',
    center:'Erode',
    myprint() {
        console.log(`The center for subject ${this.subname} is located at ${this.center}`);
    },
};

const sub2= {
    subname:'Tamil',
    center:'Bangalore',
    myprint(){
        console.log(`The center for subject ${this.subname} is located at ${this.center}`);
    }
}

sub1.myprint();
sub2.myprint();


// -------------------------------------------------------------------------------------------------------------

//                            CONSTRUCTORS


function Test(sub,totalScore,grade) {
    this.subject=sub;
    this.maxScore=totalScore;
    this.myGrade=grade;
};

let test1 =new Test('English',90,'A+');
console.log(test1.subject);
console.log(test1.maxScore);
console.log(test1.myGrade);

let test2=new Test('Tamil',92,'A+');
console.log(test2.subject);
console.log(test2.maxScore);
console.log(test2.myGrade);


// Example 2

function PersonDetail(name) {
  this.name=name;
  this.intro=function() {
    console.log(`My name is: ${this.name}`) ;
  };
}

const aspire=new PersonDetail("Aspire");
console.log(aspire.name);
aspire.intro();

const systems=new PersonDetail("System");
console.log(systems.name);
systems.intro();