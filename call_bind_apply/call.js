var products={prodName:"cables",prodQuantity:1000,domain:"hardware"
, supplier:function(k1,k2)
{
    console.log("Our Product details" +" "+this.prodName+" "+this.prodQuantity+" "+this.domain);
}

}


products.supplier.call(products)