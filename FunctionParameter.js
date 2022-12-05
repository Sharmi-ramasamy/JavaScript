// function a(B){
//     B()
// }
// a(c);

// function c(){
//     console.log('Hi');
// }



// function one(two) {
//     // return 'hi';

//    function g(h=one){
//     console.log(h());
//    }
//    g();
// }
// one();



function a() {
    return "hi";
}
function b(h=a) {
    console.log(h());
    function c() {
        return "Welcome";
    }
    return c();
}
console.log(b());