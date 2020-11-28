function showMessage(name){
    console.log(`hi ${name} welcome to the site`) // the back tick is used for string interpolation
}

showMessage("sravan")
showMessage("rohit")// we are passing one parameter or argument to the function
showMessage(10)

function add(a,b){ // here a and b are called as parameters of the function
    console.log(`The total sum is ${a+b}`);
}
add(4,2)
// the one of the main purpose of writing functions is to avoid code duplication

//local varibles are the variables declared and used only inside the particular  block of code 

// local variables cannot be accessed outside the block of code 

