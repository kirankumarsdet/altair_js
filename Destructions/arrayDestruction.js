let team=['punit','shiva','sudeep','yash','darshan']

//Case1: accesing elements of any array in normal Way
let x=team[1]
let y=team[3]
console.log(x,y);

//accesing  elements of an array by skipping elements
let[a,,c]=team;
console.log(a,c);
//accesing first 3 elements of an array
let[e,f,g]=team;
console.log(e,f,g);