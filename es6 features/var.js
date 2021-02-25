console.log(msg)
if(20>10){
    var msg = "20 is greater than 10"
}

console.log(msg)
// hoisting  of the can we done only with var 

//at run time

var msg;
console.log(msg)

if(20>10){
    var msg = "20 is greater than 10"
}
console.log(msg)

//function declaration

console.log(add())

function add(){
    console.log( 'performing addition')
}


//at runtime

function add(){
    console.log( 'performing addition')
}

console.log(add())


