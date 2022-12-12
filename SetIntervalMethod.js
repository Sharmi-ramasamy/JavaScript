// function display() {
//     console.log('vaalka Valamudan');
// }
// setInterval(display,2000)



// clearInterval() method

let count=0;
 
let interval=setInterval(function(){                  //  passing the function directly inside setInterval() method
    count+=1;
    if(count===5) {
        clearInterval(interval);
    }

        console.log('vaalka Valamudan');
    

    },1000);
    
    
// passing additional paramaters to setInterval() method


function myName(fname,lname) {
    console.log('Hi'+' '+fname+' '+lname);
}
setInterval(myName,5000,'Aspire','Systems')

