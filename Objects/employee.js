var employee={
    Ename:'kiran',emailId :'kiranppammar.023@gmail.com', mobNo:8951462015,
}
console.log(employee)


//adding details
employee.maritalStatus="Single"
console.log(employee.maritalStatus);
console.log(employee)

//deleting details

delete employee.maritalStatus;
console.log(employee.maritalStatus)
console.log(employee);

//adding object inside an object
var employee={
    Ename:'kiran',emailId :'kiranppammar.023@gmail.com', mobNo:8951462015,
       OtherDetails:{ dob:"20/01/1994", DofJoining:"10/10/2022", Position:"Test Engineer"

    }
}
console.log(employee)


function otherdetails(Dob,DofJoinging)
 {
    console.log(Dob);
    console.log(DofJoinging);
}
console.log(otherdetails("10/06/1994","10/10/2022"));

//Printing a particualr value
console.log(employee.Ename)

//calling an object Insdie an object
console.log(employee["OtherDetails"])

// Adding an array
employee.personalDetails=["Age=27","Weight=70"]
console.log(employee)
console.log(employee.personalDetails[0])

//adding a function

