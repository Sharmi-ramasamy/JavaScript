// JSON - JavaScript Object Notation 
// text-based data format that is used to store and transfer data.


// JSON OBJECTS

const details= {
    "name" : "ABC",
    "age" : 21,
    "gender" : "F",

}
console.log(details.name);

const animal ={ 
    "wild" : ["dog","cat"],

   };
   console.log(animal.wild[1]);

// JSON ARRAY
 
const fruits= ["Mango","chikooo","Berry"]
console.log(fruits[2]);


// JSON Array containing Objects

const arr =[
    { 
        "fruit1":"Orange",
        "color1":"Orange",
        "number1":2,
        "tasty1":true,
    },
    {
        "fruit2":"Apple",
        "color2":"Red",
        "number2":1,
        "tasty2":false,
    },
    {
        "fruit3":"PineApple",
        "color3":"yellow & green",
        "number3":4,
        "tasty3":true,
    },
    {
        "fruit4":"Jackfruit",
        "color4":"Yellow & green",
        "number4":6,
        "tasty4":true,
    }
]

console.log(arr[0].number1);
console.log(arr[3].fruit4);



// EXAMPLE 2

const data= {
    "name": "Renu",
    "age": "20",
    "hobby": {
        "reading": true,
        "gaming": false,
        "sport":"Athlete"
    },
    "course":["HTML","CSS","JavaScript"]
}

// Accessinig data by dot notation

console.log(data.name);                    // Renu
console.log(data.hobby);                   // {reading:true , gaming:false, sport:'athlete'}

console.log(data.hobby.sport);             // Athlete
console.log(data.course[2]);               // JavaScript

// Accessing data by bracket notation

console.log(data["hobby"]["sport"]);
console.log(data["course"][1]);


// Converting  JavaScript Object to JSON format

    const jsondata={name:"XYZ",age:22};

    const obj=JSON.stringify(jsondata);
    console.log(obj);

// Converting JSON to javaScript object

  const jsonDatas='{"name":"ABC","age":"67"}';
  const objt=JSON.parse(jsonDatas);
   console.log(objt);


 