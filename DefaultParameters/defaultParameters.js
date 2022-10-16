function eNames(firstname='kiran',lastname)
{
     console.log(`my firstname is ${firstname} and my last name is ${lastname}`)
}
eNames('kumar')

function add(a,b=2) {
    return a*b;
}
console.log(add(2))

function mult(a=1,b=2) {
    return a*b
}
console.log(mult(2,5));

class p1{
    constructor(e1='kiran',e2,e3='')
    {
        this.e1=e1;
        this.e2=e2;
        this.e3=e3;
    }
}
var p2= new p1('kumar','gm')
console.log(p2);