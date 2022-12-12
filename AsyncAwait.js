let promname= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise resolved')},4000)
    });

    async function asyncFunc() {
        try {
            let result=await promname;
            console.log(result);
            console.log('successful');
        }
        catch(error) {
        console.log(error);
    }
}

asyncFunc();


let criteria=new Promise(function(resolve,reject) {
    setTimeout(function(){
    let mark=49;
    if (mark>=50) {
        resolve("Pass")
    }
    else {
        reject("Need to improve")
    }
})
,8000});

async function asyncFunc1() {
    try {
        let result=await criteria;
        console.log(result);
        console.log('successful');
    }
    catch(error) {
    console.log(error);
}
}

asyncFunc1();