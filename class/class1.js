class vehicles {
    constructor(bikename,model,engine)
    {
        this.bikename=bikename;
        this.model=model;
        this.engine=engine;
    }
    static newBike='pulsar500';
    oldBikes='hondas';
nonStaticMethod()
{
    console.log('im non static method');
}
static StaticMethod()
{
    console.log('im static method');
}
    car()
    {
        console.log('im printing cars');
        console.log(vehicles.newBike);// accessing static variable inside non static method
        console.log(this.oldBikes);// accessing non static varibale in non static method
        this.nonStaticMethod() // accessing non static method in non static method
        vehicles.StaticMethod()// accessing static method in non static method
    }

     static bikes()
     {
      console.log('im printing bikes');
        console.log(vehicles.oldBikes);// accessing non static variable in static    
         console.log(this.newBike); //accessing static variable in static method
           let v = new vehicles(); //Object Creation or Instance creation
                console.log(v.car());
                console.log(this.StaticMethod());// accessing static method inside static method
                console.log(v.nonStaticMethod());// accesing non static method in static method
    }    
}
var veh= new vehicles();
//  var vehDetails1=new vehicles("enfiled",'thunderbolt',1500)
//  var vehDetails2=new vehicles("Bajaj","pulsar",500)

 //Accessing static variable - class reference
 console.log(vehicles.newBike)
 //Accessing non static variable - new object reference
 console.log(veh.oldBikes);
 //Accessing Static method outside class- class reference
 console.log(vehicles.bikes());
 //Accessing non static method outside class - obj reference
 console.log(veh.car()); 
