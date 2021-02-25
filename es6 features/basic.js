

console.log("hello world")

// any functiom returned in javascript is wrapped inside the function

console.log(msg1)
var msg1;
// msg is hoisted 

let j = msg()
console.log(j)
//hello()
//function declaration only  those functions will be hoisted 
function msg(){
    return "hi guys"
}
//function expression
var hello = function(){
    console.log("hello")
}



//any value assigned to the variable can be access after the assignment line 
console.log(msg3)
var msg3 = "hello"


console.log(msg2) // undefined
var msg2 = "welcome"
console.log(msg2) // welcome 
