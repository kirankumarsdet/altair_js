class tyss {
    constructor(empName, empId, empDept) {
        this.empName = empName;
        this.empId = empId; 
        this.empDept = empDept;
    }

    static s1()
    {
        console.log('im static');
    }
     s2()
     {
        console.log('im non static');
     }
    static empAge = 50;
    empSalary = 1000;
    static birthYear(obj_ref) {
        let Byear = 2022 - this.empAge;
        console.log(Byear);
        var ty = new tyss();
        console.log(this.empAge);
        console.log(ty.empSalary);
        this.s1()
        obj_ref.s2()
        
    }
    colleagues() {
        console.log('My collegue is Kiran')
        console.log(this.empSalary);
        console.log(tyss.empAge);
        tyss.s1()
        this.s2()
        // tyss.birthYear();
    }
}
// To Access non static variable or method we should create an object
var newObj = new tyss();
// console.log(tyss.empSalary);//Undefined
// console.log(newObj.empSalary);//1000
// console.log(newObj.colleagues());// Accessing non static method
// console.log(tyss.birthYear()) // Accessing static method with the help of class
// console.log(tyss.empAge)// Accessing static variable with the help of class

newObj.colleagues()
tyss.birthYear(newObj)
