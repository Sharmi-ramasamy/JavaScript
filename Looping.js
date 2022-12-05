const cats = ['Leopard',  'Tiger',  'Lion'];

for (const cat of cats) {
    console.log(cat);
}
 
// Array to String Convertion

const cat = ['Leopard', 'Giraffe', 'Tiger', 'Zebra', 'Lion'];
console.log(cat);
console.log(cat.join(' '));                              // convert array into string
console.log(cat.join(' ').toUpperCase());                  // string is converted into uppercase



// map() and filter()

function toUpper(stri) {
    return stri.toUpperCase();
  }
  
  const animal = ['Leopard', 'Giraffe', 'Tiger', 'Lion'];
  const upperCats = animal.map(toUpper);
  console.log(upperCats);
  