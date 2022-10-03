function companyDetails(names,location,pin,domain,valuation)
{
    this.names=names;
    this.location=location;
    this.pin=pin;
    this.domain=domain;
    this.valuation=valuation;
}
let DetailsOfComp1=new companyDetails("Tyss","blore",588888,"IT","500Crs")
let DetailsOfComp12=new companyDetails("QSpider","Mysore",577888,"Academy","100Crs")
console.log(DetailsOfComp1);
console.log(DetailsOfComp12);
