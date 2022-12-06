// const form = document.querySelector("input[name='passwords']")

// const form = document.getElementById("pass2") 

const form = document.querySelector("#pass2")
form.addEventListener('focus', () => {
   form.style.backgroundColor = 'pink';
  });
  

//   form.addEventListener('blur', () => {
//     form.style.background = 'lightblue';
//   });

  form.addEventListener('blur', changecolor);
  function changecolor(){
    form.style.backgroundColor = "lightblue";
  }
 
  