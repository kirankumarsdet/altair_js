var arr1=[1,2,3,4]

//map
//1
// var a= arr1.map(double)
// function double(x) {
//     return x*2;
// }
//2
// a=arr1.map(function double(x) {
//     return x*2;
// })
//3
a=arr1.map((x)=>(x*2))
console.log(a);
// filter
b=arr1.filter((x)=>(x%2==0))
console.log(b);
// reduce