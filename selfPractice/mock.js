
let p = new Promise((resolve,reject)=>
{
    var a=1;
   var b=2;
   var c=a+b;
  if(c==3)
    {
        resolve('success')
    }
    else{
        reject('failed')
    }
})
 p.then((msg)=>{
    console.log(msg);
 }).catch((msg)=>{
    console.log(msg);
 })