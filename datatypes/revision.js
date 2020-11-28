// there are 8 types of datatypes in javascript

//6 are primitive datatypes

// primitive datatypes are nothing simple datatype or the datatypes which cannot be broken with simple datatype example integer is an integer datatype 

/*
number- in js the number includes both integer and floating point numbers
undefined - in js the variable which is declared and not assigned any value to it then the variable will the type of undefined
*/


let message; //variable declared but not assigned
console.log(message)

//If a variable is declared, but not assigned, then its value is undefined:

let age = 27
console.log(age)
// age = undefined // reassign the variable
// console.log(age)

// the number datatype in javascript represents both integers and floating numbers

// there are special numeric values belongs to number datatype infinity, NaN(not a number)

console.log(1/0)

console.log("sharath"/6) 
 // when u are performing addition sub mul div    
// if any of the operand is not a number like string boolean null then NaN is returned

//2 bigInt
let bigInt = 12345n;
// A BigInt value is created by appending n to the end of an integer
console.log(typeof(bigInt)) 


//3 string

//in javascript a string is surrounded by quotes
//Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

let  name = "sharath"

console.log(`The name is of the developer is ${name} and his age is ${age}`)