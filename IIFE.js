// IMEDIATE INVOKE FUNCTION EXECUTION

// If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this:


(function() {
    console.log('IIFE- Imediate Invoke Function Execution');
})();


// passing arguments 

let a=90;
let b=100;
let c=a+b;
(function(){
    console.log('sum:'+ c);
})();


let difference=(function(a,b) {
    return a-b;
})(200,150);    
console.log(difference);