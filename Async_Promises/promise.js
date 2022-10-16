async function sync() {
    console.log("login");
    var p = new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            resolve("resolved")
            reject("rejected")
        }, 1000);
    })
    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    console.log("logout");
}
sync()