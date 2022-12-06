// const btn=document.querySelector("button");
// let count=0;
// btn.addEventListener('click',() => {
//    count+=1;
//    if(count<=10){
//     btn.textContent=(`Click Count: ${count}`);
//    }
//    else{
//     count =0;
//    }  
// })


const btn=document.querySelector("button");
let count=0;
btn.addEventListener('click', clickCount);
function clickCount() {
    count+=1;
    if (count<=10) {
        btn.textContent=(`Click Count = ${count}`);
    } 
    else {
        count=0;
    }
}










 
  