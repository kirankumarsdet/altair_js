//concatination
var eNames=['k','i','r','a','n']
var salary=[...eNames,100,200,300,400,500]
console.log(salary);

//
var emailDetails={
    ename:'kiran',eid:'01',eSalary:'6L'
}
var companyDetails={
    cName:'TYSS',location:"Blore",domain:'IT',eSalary:'8L'
}
var allDetail={...emailDetails,...companyDetails,...salary};
console.log(allDetail);

var arra1=[1,2,3,4,5]
var arra2=[6,7,8,9,10]
console.log(...arra1,...arra2);


var emailDetails1={...emailDetails}
console.log(emailDetails1);