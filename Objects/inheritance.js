var stocks ={ tata:"steel", jsw:"cement", wipro:"IT"
}
var stock2={}
stock2.__proto__=stocks;
stock2.jsw="metal"
stock2.wipro="Infra"
console.log(stocks);
console.log(stock2);
console.log(stocks);

var stock3={}
stock3.__proto__=stock2;
stock3.jsw="machines"
console.log(stock3);