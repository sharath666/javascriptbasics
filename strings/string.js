//The textual data in javascript is stored as strings

// Strings can be enclosed within either single quotes, double quotes or backticks

// why backticks  are used or advantages of backticks


/*
backticks are used to embed any expressions inside the string used ${}
using backticks is that they allow a string to span multiple lines:



*/

let guestList = "Guests:\n John\n Pete\n Mary\n";

console.log(guestList)


let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str1 === str2); // true



//string properties


// length property is used to specify the length of the string
let str3 = 'ha  '
console.log(str3.length)

// length property also gives the whitespace added to the string  also the special characters


let str4 = "sharath"
 console.log(str4[0])

 //charAt is the method called on the string which takes one argument 

 console.log(str4.charAt(0))

 // to get the last character in the string
 console.log(str4[str4.length -1])

 // the return type of the use of square bracket is undefined and charAt returns empty string


 console.log(str4[1000])
 console.log(str4.charAt(1000))

 // to iterate the string we can use for..of

//  for(let char of str4){
//      console.log(char)
//  }


 //string are immutable


 str4[7] = "S"
 // since the string are immutable u cannot change i.e u cannot insert  or delete an element 

 console.log(str4[7])

 array1 = [10,20]

 array1[0] = 11
 console.log(array1)
 // arrays are mutable

 let str5

 //console.log(str5.toUpperCase())

 // toUppercase converts all the elements in the string to upper case 

 // toLowerCase converts all the elements in the string to lower case 

 //if the variable has been declared and not assigned then we get error TypeError: Cannot read property 'toUpperCase' of undefined


 //str.indexof take the substr has an first argument and if the substr is found it will return 


 str6 = 'sharath is my name'

 console.log(str6.indexOf("I"))
 let str7 = 'Widget with id';

 console.log(str7.indexOf("d", 14))


 // if the 2 parameter we specify it will give next occurance  if not found then it will return the last occurance position if the position exceeds the string length then it will return -1


 //indexof method in the if condition the check syntax is str.indexOf("Widget") != -1 because in the indexof the substr present at 0 index means then it will return 0 which is considered as falsy value so the syntax is slight different


 str8 = "fdSharath"
// if the slice method is used with one argument it will remove those many of characters
 console.log(str8.slice(2))
 let str9 = "stringify";

console.log( str9.slice(2,1) ); // 'gif'

// in the slice method if the two arguments are present the first argument has to lesser or smaller than second argument

