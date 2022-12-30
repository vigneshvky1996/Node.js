let p = new Promise((resolve,reject) =>{
    let a = 2;
    if(a===2){
        resolve('success');
    }
    else{
        reject('failed')
    }
})

p.then((message) =>{
    console.log("message received is "+ message);
}).catch((errorMessage) =>{
    console.log(("message received is "+ errorMessage));
})