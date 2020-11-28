let x = "user"

    switch(x){
        case 'admin': // if x === "admin"
           console.log("Admin has been logged in")
            break
        case 'user': // if x ==="user" || x === "developer"
        case 'developer':
            console.log("User has been logged in")
            break
        default: 
            console.log("Unwanted user has been logged in")
            break
    }


    let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too large' );
    break;
  default:
    console.log( "I don't know such values" );
}

function ji(){
return "hi"
}
console.log(ji())



let c = "10", b = 10 // true is 1 and false is 0 in numbers
console.log(++c)
console.log(b+(+c))
console.log(+c+b)
//string ;

// in javascript if any one of operand is string and we using addition operator + if will perform concatination rather than performing addition


let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    console.log( 'One or zero' );
    break;

  case '2':
    console.log( 'Two' );
    break;

  case '3':
    console.log( 'Never executes!' );
    break;
  default:
    console.log( 'An unknown value' );
}

// input box value will be string by default


let arg = +prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  case NaN:
    alert('Not a number');
    break;
  default:
    alert( 'An unknown value' );
}
