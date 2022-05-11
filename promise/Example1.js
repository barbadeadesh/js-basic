let complete= true;
let prom = new Promise (function(resolve,reject){

    if(complete){
        resolve("I am successfull");
    }else{
        reject ("i am failed");
    }
});
console.log(prom);