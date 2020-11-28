// function declaration


function sayHello(){   
   return "Hi" 
}

// all the functions will return  undefined by default so to return a particular we use return 

//function expression

let sayHi  = function(){
    return 100
};


let func = sayHello() 
// hi 

let Hy  = sayHello

// to copy the function code to the another variable

console.log(func);
console.log(sayHi());


function getGreeting(){
    return "Namaste"
}

// function declaration a varaible called getGreeting is  declared and assign this above func to it


getGreeting = function (){
    return "Namaste"
}


let name ="sharath";
