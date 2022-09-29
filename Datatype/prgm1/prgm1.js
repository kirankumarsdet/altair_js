// only global
var a =1;
let b =2;
const c= 3;

// only block
{
    var a1= 1;
    let b1= 2;
    const c1= 3;
}


// only function
function sum(a,b) {
    var a2=1;
    let b2= 2;
    const c2= 3;   
}
sum(2,3)

// function inside block
{
    function sub(c,d) 
    {
     var a3=1;
     let b3=2;
     const c3=3;   
     {
        var a4=1;
        let b4=2;
        const c4=3;
        function si(l,o)
        {
            var a5=1;
            let b5=2;
            const c5=3;
        }
        si(9,8)
     }
    }

}
sub(2,5)

// block inside a function

function kiran(a,d) 
{
    {
        var q=2;
        let w=3;
        const e=4; 
        function tree(l,k)
        {
            var q1=2;
            let w1=3;
            const e1=4; 
            {
                var q2=2;
                let w2=3;
                const e2=4; 
            }

        }
        tree(1,2)
    }
    
    
}
kiran(24,6)


