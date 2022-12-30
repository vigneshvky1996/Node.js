
//here it act as a rest operator
// args is just a name and it can be anything 
// the function can accept any number of parameters
function sum(...args){
    let result = 0;
    for (const arg of args) {

        result = result + arg ;
    }
    return result;
}
let x = sum(5,6,7);
console.log(x);

function sum1(num1, num2){
    let result1 = num1 + num2;
    return result1;
}
let y = [5,6,7];
// here it act as a spread operator
// opens the array and gives value one be one to the function
let z = sum1(...y);
console.log(z);

//default value for parameters in function
// using arrow function
const add = (a = 5, b = 6) =>{
    return a+b;
}

//calling function with values
let c = add(10, 20);
console.log(c);

//calling function add without values
//it takes default values 

c = add();
console.log(c);

//objects
// working with key and value
let vignesh = {
    firstName : "vignesh ",
    lastName : "mahendra",
    age : 25,
    qualification : "B.E",
    percetage : 67
};
console.log(vignesh.firstName);
console.log(vignesh.lastName);
console.log(vignesh.age);
console.log(vignesh.qualification);
console.log(vignesh.percetage);

// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add('a');
// set cannot have duplicate values
// added 'a' two times but it will take one entry
console.log(letters);


console.log("String.includes()");//includes() method returns true if a string contains a specified value, otherwise false
let text3 = "Hello world, welcome to the universe.";
console.log(text3.includes("world"));//world is there it returns true otherwise false

console.log("String.startsWith()");//startsWith() method returns true if a string begins with a specified value, otherwise false
console.log(text3.startsWith("Hello"));

console.log("String.endsWith()");//endsWith() method returns true if a string ends with a specified value, otherwise false
console.log(text3.endsWith("false"));

console.log("New Math Methods");
console.log("Math.trunc() Method");//Math.trunc(x) returns the integer part of x
console.log(Math.trunc(4.9));    // returns 4
console.log(Math.trunc(-4.2));    // returns -4

console.log("Math.sign() Method");//Math.sign(x) returns if x is negative, null or positive
console.log(Math.sign(4));//1
console.log(Math.sign(-4));//-1
console.log(Math.sign(0));//0

console.log("Math.cbrt() Method");//Math.cbrt(x) returns the cube root of x
console.log(Math.cbrt(8));    // returns 2
console.log(Math.cbrt(64));    // returns 4
console.log(Math.cbrt(125));    // returns 5

console.log("Math.log2(x)");//Math.log2(x) returns the base 2 logarithm of x
console.log(Math.log2(2));//returns 1
console.log(Math.log2(4));//returns 2

console.log("Math.log10(x)");//Math.log10(x) returns the base 10 logarithm of x
console.log(Math.log10(2));
console.log(Math.log10(4));


// values inside a block can have temproary values
let g = 6;
console.log(g); // here value is 6
{
    let g = 10 ; // inside this block value of g is 10
    console.log(g);
}
console.log(g); // outside the block values will be 6