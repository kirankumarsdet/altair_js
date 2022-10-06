function x(y) {
    console.log("im x");
    
    y()
}
x(function y()
{
    console.log("im y");
})
