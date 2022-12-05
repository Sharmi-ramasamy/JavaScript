// Example for conditional statements

let select=document.querySelector('select');
let para=document.querySelector('p');

select.addEventListener('change',setWeather);

function setWeather() {
    const choice=select.value;
    console.log('1');
    if (choice==='Sunny') {
        para.textContent="Its hotday";
    }
    else if (choice==='Rainy') {
        para.textContent="It\'s rainyday";
    }
    else if (choice==='Winter') {
        para.textContent="It\'s snow day";
    }
    else if (choice==='Fog') {
        para.textContent="It\'s foggy day";
    }
    else if (choice===  'Overcast') {
        para.textContent="Not rainy,but It\'s grey and goomy";
    }
    else {
        para.textContent='';
    }
}