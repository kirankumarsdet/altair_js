var c1employees ={
    e1:'kiran',e2:'abhi',e3:'swaraj',
    dept:['ele','mech','civil'],
    otherDetails:function()
    {
        console.log("Hello my name is "+" "+this.e1 +" "+"and im from "+this.dept[1])
    }
}
var c2employees ={
    e1:'nikita',e2:'shweta',e3:'sujata',
    dept:['is','cs','bt'],otherDetails:function(k1,k2)
    {
        console.log(k1+k2+"hi my name is "+" "+this.e1 +" "+"and im from "+this.dept[2])
    }
}
c1employees.otherDetails()
c2employees.otherDetails()

//case1=Regular Method
var emp=c1employees.e1;
var dept=c1employees.dept[1];
console.log(emp);
console.log(dept);

//case2:curly braces:referenc variable should same as object
let {e1}=c1employees;
//let {e1}=c2employees;
console.log(e1);
//console.log(e1);


//case3
//case 3: change the reference variable => so that we can decalre our own reference variable
//f_name in object myself will be renamed as myName
let {e1: empName} = c2employees
console.log(empName);                    
// console.log(f_name);                //undefined /error
