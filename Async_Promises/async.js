console.log("Login");
setTimeout(() => {
    setTimeout(() => {
        console.log("im first");
    },1000);
    
    setTimeout(() => {
        console.log("im last");
    },3000);
    
    setTimeout(() => {
        console.log("im second");
    },2000);    
}, 5000);
console.log("Logout");