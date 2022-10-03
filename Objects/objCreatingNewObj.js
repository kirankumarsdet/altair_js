var profile={
    Firstname:"Kiran",LastName:"Kumar",design:"Automation Engineer",sal:"5"
    ,skills:["java", "sel", "api"], 
    printSt:function () 
    {
        return "Im a : " + " "+this.design
    }
}

var details= Object.create(profile);
details.Firstname="kiranraj"
details.design="Manual Test Engineer"

console.log(profile)
console.log(details)
console.log(profile.printSt())
console.log(details.printSt())