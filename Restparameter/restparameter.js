// rest paramaeter in a function
function prodDetails(prodName,prodPrice,prodCategory,...prodDetails) 
{
  console.log(prodDetails);    
}
prodDetails('Bisuiut','50','Consumer','10% calori','5% protien','15%added sugar','30% wheet floor','2% edible oil','10 % artificial colors')

// rest parameter in an object

var {prodName,prodPrice,ProdCategory,...prodDetail}=
{
    prodName:'Bisucut',prodPrice:50,ProdCategory:'consumer',calorie:'10%',protien:5,sugar:15,wheet:30
}
console.log(prodDetail);


function add(a,b)
 {
 var rst=[1,2,3]
 console.log(arguments)
//  console.log(arguments.pop());   (This is difference between arguments and rest parameters..rest parameter works for array methods but argument array doesnot work for array methods)
}
add(1,3,2,5,8,8)