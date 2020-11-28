// the other way  of writing the functions  instead of using function expression is arrow fuctions


//There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

// let sum = function(a,b){
//     return a+b
// }


//using arrow functions

let  sum = (a,b) => {
console.log(a);

   return  a+b;
}

//use flower brackets for the multiple expressions use explictly return here

sum(2,4)

// only one parameter
let double =  n =>  n*2 // mo need to use return

console.log(double(3))

//without parameters 


let hello = () =>"hello world"

console.log(hello())



let age = 10;

let welcome = (age<18) ? () => "child" : () => "adult" 

console.log(welcome())