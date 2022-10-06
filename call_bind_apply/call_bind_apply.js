var company1={
    ceo:'raj',manager:'kumar',
    statement:function() {
        console.log("he is"+"  "+this.ceo +" and manager is "+ this.manager);
    }
}

var company2={
    ceo:"vijay",manager:"ravi",
    statement2:function()
    {
        console.log("i am"+this.ceo);
    }
}


// console.log(company1.statement())
// console.log(company2.statement2())
company1.statement.call(company2)

//bind
function bindExample(v1,v2)
{
    console.log(v1+ "  "+ this.ceo+" "+v2+"   "+ this.manager);
}


var statement3 = bindExample.bind(company1,"hi","hello")
statement3()

// apply
var person={fulname:function(){
    console.log(this.firstName+" "+this.lastName);
}}

var person1={
    firstName:"mary",lastName:"joe"
}
result=person.fulname.call(person1)

