function showMessage(){
    let message = "welcome all" // local variable
     console.log(message)
}

showMessage()


//outer variables
//   these variables can be used across the functions

let name = "sharath"
function displayName(person1, person2,person3,person4){ 
    console.log(`hi ${person1} ${person2} ${person3} ${person4}`)
}

displayName("sharath", "sravan", "rohit")


function greetWithName(){
    let name ="rohit" 
    console.log(name) 
    return name
}
greetWithName()
console.log(name)



function callName(name1, name2=greetWithName()){

    console.log(`hi ${name1} and ${name2}`)
}

callName("sharath")

// in javascript if we call a function to the parameter then the function is called everything irrespective of the parameter is called or not



// default values to the parameters

function greeting(message){
  message = message || 'message is empty'
    return message

}

console.log(greeting("ji"))

/*
In JavaScript, all function arguments are always passed by value. It means that JavaScript copies the values of the passing variables into arguments inside of the function. Any changes that you make to the arguments inside the function does not affect the passing variables outside of the function.

*/


