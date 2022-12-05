// anonymous function

let add=function(a,b) {
    return a+b;
}
console.log(add(20,7));



// Arrow function 

let sum =(x,y) => {
    return x+y;
}
console.log(sum(50,2));        // if return needed use {}


let product=(m,n) => m*n;
console.log(product(27,52));

console.log(typeof product);

console.log(add instanceof Number);
console.log(sum instanceof Function);