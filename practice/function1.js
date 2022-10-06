function empDetail(ename,eid) 
{
 console.log('hi this is '+ename+' and id is '+eid)
}
empDetail('kk',14)

//Function Declaration
 function Additions(a,b,c,d)
{
    e=a+b;
    let f= c+d;
 console.log(e);
 console.log(f);
 console.log(e+f);
}
Additions(1,2,3,4)


//Function Expression
sub= function(a,b,c,d)
 {
 e=b-a;
f=d-c;
 console.log(e,f);   
}
sub(1,2,3,4)
console.log(e+f)

//Arrow Function
var cal1=(a,b,c)=>{
    add=a+b;
    sub=a-c;
    mul=a*b*c;
    div=a/b;
    console.log(a,b +"=" +add)
    console.log(sub);
    console.log(mul);
    console.log(div);
}
cal1(10,5,15)


//calling a function inside another'

var add=(a,b)=>{
    e=a+b;
    d=a*b;
    console.log(e);//6
    console.log(d);//9
}
f=2;

var calci=(c,d)=>{
 add(3,3)
 console.log(e+(c*d)) //31
 console.log((f+(c*d)));//34
}
calci(5,5)
