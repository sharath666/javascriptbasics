// there are 3 logical operators in javascript OR || , AND && and NOT !

//OR

let hour = 9;
    
if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}
//in or logical opertor if any one condition is true that block will be executed
// so since hour < 10 the first truhy got so that block is executed instead to going to second condition

let name="rohit"

if(name ==="roh" || name==="rohith" || name ==="rohitk"){
    console.log(`my name is ${name}`)
}

// when we are checking with the operands it will return the last operand if all are falshy

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous");

//AND &&


console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false


let hours = 12;
let minute = 30;

if (hours == 12 && minute == 30) {
  console.log( 'The time is 12:30' );

}
else{
    console.log('The time is not 12:30')
}

if (1 && 0) { // evaluated as true && false
    console.log( "won't work, because the result is falsy" );
  }

  console.log(1&&0)
  console.log(0 && "helloworld")
  console.log(8 && 1)


  console.log(1 && 0 || 2 &&3 )

  let x = 1;

(x > 0) &&  console.log( 'Greater than zero!' );

console.log(!true)

console.log( console.log(1) || 2 || console.log(3) );

// since console.log returns undefined so the output is 1 ,2 

console.log( console.log(1) && console.log(2) );