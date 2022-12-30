// closure
let z= 56;
function outerFunction(outer){
    function innferFunction(inner){
        console.log(outer);
        console.log(inner);
        console.log(z);
    }
    return innferFunction;
}

let fun = outerFunction("outer");  //calling outer function and passing value outer to it
fun("inner"); // calling inner function using function expression fun

// hoisting
//calling the function add before defining the function
console.log(add(5,6));

function add(x,y){
    let num1 = x;
    let num2 = y;
    return num1+num2;
}