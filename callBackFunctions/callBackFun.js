function calculator(a,b,multiply) 
{
console.log("calculation Started");
result=multiply(a,b)
console.log(result);
console.log("calculation ended");
}
function mul(a,b)
{
 return (a*b)    
}
calculator(5,3,mul)

// calculator2

function calculator2(a,b,c,d) 
{
result1=add(a,b)
console.log(result1);
result2=sub(a,b)
console.log(result2);    
}
function add(a,b) 
{
    return a+b;
}
function sub(a,b) 
{
 return a-b;    
}
function mul(a,b)
 {
 return a*b;   
}
calculator2(1,2,3,4)