 
//The let variable declaration is used for the local variables or the variables which are declared within a block like within loops or functions

let  a =10;
var d =10;
function add(){
let a=3,  b=4; 
var d=20;
console.log(a+b);    
}
//let a =20;
var d = 30;
add();
console.log(a);
console.log(d);


// var a = 'hello'; // globally scoped
// var b = 'world'; // globally scoped
// console.log(window.a); // undefined
// console.log(window.b); // 'world'
// var a = 'hello';
// var a = 'world'; // No problem, 'hello' is replaced.
// let b = 'hello';
// let b = 'world'; // SyntaxError: Identifier 'b' has already been declared


let message = "hello"
 message =10000


let message1 = "hello"
 message1 ="world"

console.log(message)
console.log(message1)

// the variable declared using let keyword can't be re declared but  can be  reassigned using the variable name 

// the let keyword varible declaration is used for the locally declaring the variable

//using let the variable can be declared only once but the value of the variable can be changed to anything

// using var the variable can be allowed to be declared multiple times and the value of the varibale can also be changed

//So, we should declare a variable once and then refer to it without let.

let isBoolean = true
/*
in correct variable declaration

let 1a; // cannot start with a digitlet message = 'Hello!'; // define the variable and assign the value


let my-name; // hyphens '-' aren't allowed in the name
*/

// let return = 5;
// console.log(return)
// name = "sharath"

// console.log(name)

// constants

const myBirthday = "24-07-1993"
// myBirthday = "27-08-1993"

const presentTime = Date.now()

const COUNTRY_NAME = "INDIA"

console.log(presentTime)


let admin, name;
name="john"
admin = name
console.log(admin)


const PI = 3.142

// the variable declared using const keyword can't be redeclared and reassigned


//var 

var name9 = "sharath"
console.log(name9) // sharath
var name9 = "sachin"

console.log(name9) // sachin

console.log(name9 + "hello world")

// the variable declared using var keyword can be redeclared and reassigned

