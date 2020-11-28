console.log(2 > 1)

//whenever we are doing are comparsion between two operands here 2 and 1 the return type will be boolean operands here 2 and 1 the return type will be boolean

//string camparsion


console.log('Z' > 'A')

// if it a single character check
console.log('abcd' > 'abef')
// the above two examples work if the strings length are same these check will happens

console.log("abcde" > "zxs")
//false

// irrespective of the string length the string comparsion will happen accordingly with the lexicographical

//unicode = ["A..Z", "a..z"]
console.log("A" > "a")
//since the index value of small a is greater than capital A so the output is false


//different types check

console.log('2' >1)
console.log(2 >1)

//string '2' will be converted to the number and then the comparsion happens in js


//in javascript == equlaity check === strict equlality

a = 10, b ="10"

console.log(a == b)
// b is converted to number 10 

console.log(a === b)
// checks both the operands are of same datatype or not if they are different it will return false

console.log("2" > "21" ) 
//since both are strings 


console.log(null >= "\n0\n")
//true




