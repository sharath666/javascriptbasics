// callback functions


function stringCheck(str){
    if (typeof(str) === "string"){
        return true 
    }
    else{
        return false
    }
}

function ask(str, stringCheck){
   if  (stringCheck(str) === true){
       return `${str} is a string`
   }
   else{
       return `${str} is not a string`
   }
}

console.log(ask("sharath",stringCheck))


/*
    function declaration
 */

console.log(sayHi("rohith"))
 function sayHi(name){
     return name
 }



 // whenever the script has be runned it will check for global variable functions since sayHi is declared globally 

 //That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.


 let sum = function(a,b){
     return a+b
 }

 console.log(sum(2,3))


 function checkAge(age){
     if (age> 18){
         var message = "eligble for voting"
        
     }
     else{
          var message  =" Not eligble for voting"
     }
 }

// console.log(message)



 let age = 17;
 let welcome;

 
 if (age < 18) {

   welcome = function() {
     console.log("Hello!");
   };
 
 } else {
 
   welcome = function() {
     console.log("Greetings!");
   };
 
 }
 
 welcome(); // ok now

