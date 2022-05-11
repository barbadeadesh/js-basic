function add (num1,num2,callback) {
    console.log(num1+num2)
    callback()

}
function sayhello(){
    console.log("This is my first programm")
}
add(10,10,sayhello)