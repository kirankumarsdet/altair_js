//concat

var arr=[1,5]
var arr2=["Tyss"]
console.log('concat')
console.log(arr)
console.log(arr.concat(arr2))
console.log(arr)



// Push()
var arr3=[1,4,3,8,96,715,9987]
var arr4=['ty']
console.log('push')
console.log(arr3)
console.log(arr3.push(arr4))
console.log(arr3.push('R'))
console.log(arr3)

//Pop
console.log('pop')
console.log(arr3.pop('R'))
console.log(arr3)


//Unshift
console.log('unshift')
console.log(arr3)
console.log(arr3.unshift("king"))
console.log(arr3)


// shift
console.log('shift')
 console.log(arr3)
 console.log(arr3.shift())
 console.log(arr3)
 console.log(arr3.shift())
 console.log(arr3) 


 //Splice
 console.log('Splice')
 console.log(arr3)
 console.log(arr3.splice(1,2,50,50))
 console.log(arr3)
 
 //Slice
 console.log('slice')
 console.log(arr3)
 console.log(arr3.slice(1,4))
 console.log(arr3) 

 //every
 console.log('every')
console.log(arr3)
 console.log(arr3.every((element)=>
{
    return element<100
}))
console.log(arr3)
arr3.every

//some
console.log('some')
console.log(arr3)
 console.log(arr3.some((element)=>
{
    return element<2
}))
console.log(arr3)

//index of
console.log('indexof')
console.log(arr3)
console.log(arr3.indexOf(50,0))
console.log(arr3) 

//LastIndexOf

console.log('LastIndexOf')
console.log(arr3)
console.log(arr3.lastIndexOf(4,2))
console.log(arr3)

// Reverse
console.log('reverse')
console.log(arr3)
console.log(arr3.reverse())
console.log(arr3)

//includes

console.log('includes')
console.log(arr3)
console.log(arr3.includes(96))
console.log(arr3)

// join
 console.log('join')
 console.log(arr3)
 console.log(arr3.join('k'))
 console.log(arr3)

 //for each

 arr3.forEach((element,index)=>{
    console.log(element+":"+index);
    console.log(element+1)
 })
 console.log(arr3)

 // 2nd Method
 console.log(arr3);
 arr3.forEach((element,index) => {
       console.log(  element-1)
             })
 console.log(arr3);
 
 //map
 console.log("map");
 console.log(arr3);
 console.log(arr3.map((element,index) => {
     return element*3
                    }));
        console.log(arr3);

        // filter
        console.log('filter')
        console.log(arr3);
                console.log(arr3.filter((element,index) => {
                    if(element>20)
                              return element
                            }));
                console.log(arr3);
        //filter 

        console.log('filter2')
                console.log(arr3);
        console.log(arr3.filter((element,index) => {
            if(element>3)
                      return element
                    }));
        console.log(arr3);


        // ascending
        console.log('Ascending')
        console.log(arr3);
        console.log(arr3.sort((a,b) => {
            return a-b
                    }));
        console.log(arr3);

        //Descending
        console.log('Descending')
        console.log(arr3);
        console.log(arr3.sort((a,b) => {
            return b-a
                    }));
        console.log(arr3);

                var number=[200,300,400]
       function myfunc(total,number) {
               return total-number
       }
        console.log(number.reduce(myfunc));
       console.log(number);

       var number=[200,300,400]
       function myfunc(total,number) {
               return total-number     
       }
        console.log(number.reduce(myfunc));
       console.log(number);


       var number=[100,200]
       function myfunc(total,number) {
               return total-number     
       }
        console.log(number.reduceRight(myfunc));
       console.log(number);







