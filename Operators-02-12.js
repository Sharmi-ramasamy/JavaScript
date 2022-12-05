const btn=document.querySelector("button");
const msg=document.querySelector("p");

btn.addEventListener('click', updateButton);

function updateButton() {
    if (btn.textContent==="Start Machine") {
        btn.textContent="Stop Machine";
        msg.textContent="Machine ON";
    }
    else {
        btn.textContent="Start Machine";
        msg.textContent="Machine OFF";
    }
    
}