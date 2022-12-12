
let criteria=new Promise(function(resolve,reject) {
    let mark=49;
    if (mark>=50) {
        resolve("Pass")
    }
    else {
        reject("Need to improve")
    }
})

criteria.then(function goodscore(result){
    console.log(result);
})
.catch(function lowscore(improve){
    console.log(improve);
})
.finally(function display(){
    console.log("Hardwork never fails...");
})
console.log(typeof criteria);    // object



let countValue = new Promise(function (resolve, reject) {
        resolve('HI');
        reject('Promise rejected'); 
 });
 
 countValue.then(
     function successValue(result) {
         console.log(result);
     })
 
 .catch(
     function errorValue(result) {
         console.log(result);
     });
     console.log(typeof countValue);      // object





     // try...catch in a program

const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);   
    console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);                     // referenceerror: a is not defined
}                                                       

