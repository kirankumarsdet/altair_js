class CompanyDetails
{
  constructor(name,sector,CEO,location,pin)
  {
    this.name=name;
    this.sector=sector;
    this.CEO=CEO;
    this.location=location;
    this.pin=pin;
    
  }
}
var details2= new CompanyDetails("Tyss","IT","Girish","Blore",587111)
var details3= new CompanyDetails("QSpider","Edu","Girish","Blore",587151)
console.log(details2);
console.log(details3);