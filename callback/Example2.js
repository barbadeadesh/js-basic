function add(num1,num2,callback){
    console.log(num1+num2);
    callback()
}
function sayHi(){
    console.log("passing first function")
}
function sayHello(){
    console.log("passing second function")
}
a=10;
b=5;
add(12,8,sayHi)

add(10,5,sayHello)