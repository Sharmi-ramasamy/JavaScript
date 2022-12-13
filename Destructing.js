// Destructing Object
let shoe= {
    type:'formal',
    color:'black and white',
    year:{
     first:2020,
     last:2022,
    },
    brand:'Walkaroo'
    }

 let buy={type,color,year:manufacturedyear,year:{first,last},brand,other:size=9}=shoe
 console.log(type);
 console.log(color);
 console.log(manufacturedyear);
 console.log(brand);
 console.log(size);
 console.log(first);
 console.log(last);


 // Destructuring Array

 let item=['Biriyani',200,
 choice=['veg','non-veg']];
 let choose=[food,amount,choice]=item;
 console.log(food);
 console.log(amount);
 console.log(choice[1]);
 