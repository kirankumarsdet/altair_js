
//Call
var product1={
    prodname:'vivo',price:5000,model:'d1d2'
}
var product2={
    prodname:'oppo',price:4000,model:'d3d4'
}
 ProdDetails=function (shopname,shoparea) {
    console.log(`this.prodname" and pice is "+this.price+" model is "+
    this.model +"and it is in "+${shoparea},${shopname}`);
 }
 
 ProdDetails.call(product1,"xyz shop","blore")

 //bind