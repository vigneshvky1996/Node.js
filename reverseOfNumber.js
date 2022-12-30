let num = 123456;
let reverse = 0 ;
let result ;
while(num > 0){
    result = num % 10;
    reverse = reverse* 10 + result;
    num = parseInt(num /10);
    
}
console.log(reverse);
