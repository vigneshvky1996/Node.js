//printing star pattern
// using for loop

console.log("using for loop ");
let string = "";
for(let count = 0 ; count <= 5; count++){
    for(let innerCount = 0; innerCount < count; innerCount++){
        string = string + "*";
    }
    string = string + "\n";
}
console.log(string);


// using while loop

let str1 = "";
let count = 0;
let innerCount = 0;
console.log("using while loop");
while(count <= 5){
    while(innerCount < count){
        str1 = str1 + "*";
        innerCount = innerCount +1;
    }
    str1 = str1 + "\n";
    count = count + 1;
    innerCount = 0;
}
console.log(str1);


//using do while loop

str1 = "";
count = 0;
innerCount = 0;
console.log("using do while loop");
do {
    do {
        str1 = str1 + "*";
        innerCount = innerCount +1;
    } while (innerCount < count);
    str1 = str1 + "\n";
    count = count + 1;
    innerCount = 0;
} while (count <= 5);
console.log(str1);