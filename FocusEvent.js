const form = document.querySelector("#pass2")
form.addEventListener('focusout', () => {
   form.style.backgroundColor = 'pink';
  });
  
  form.addEventListener('blur', () => {
    form.style.background = 'lightblue';
  });
