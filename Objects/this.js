let productNames ={

    prod:"CPU",price:"2000",category:"hardware",
    detail:function () {

    console.log(this.prod) 
    console.log(this.price);
    }

}
let categoryName={
    prod:"netSafe",price:2000,category:"software",detail:function() {
        console.log(productNames.prod);
        console.log(this.prod);
        console.log(productNames.category);
        console.log(categoryName.category);
        
    }
}
productNames.detail()
categoryName.detail()

