// add / remove items from array

let numbers = [10,20,30]
// adding item 
numbers.push(40) //add an item at the end of the array
numbers.unshift(5) // add an item at the beginning of the array

//push and unshift methods insert an item and  return the length of the array

console.log(numbers)

//removing item 
numbers.pop() // removes an item at the end of the array
numbers.shift() // removes an item at the beginning of the array

//pop and shift returns the item removed from the array

//splice 

//In splice method u can delete insert replace elements

let array1 = [10,20]
array1[1] = 15 // replacing 20 to 15 
console.log(array1)

let array2 = [1,2,3,4,5]

//arr.splice(start[, deleteCount, elem1, ..., elemN])

console.log(array2.splice(2)) // what are the items deleted from the array
console.log(array2) //updated array
// here after 2 items all the items in array got removed
let oddNumber = [1,3,5,7,9]
console.log(oddNumber.splice(0,2))
console.log(oddNumber)

oddNumber.splice(0,0,1,3) // inserting 

console.log(oddNumber)


let evenNumber = [1,3,6,8]
evenNumber.splice(0,2,2,4 ) // replacing // we are starting from 0th index , 2 elements to remove and insert 2,4 
console.log(evenNumber)

//slice 
// is used to create a copy of an array
let fruitNames  = ["apple", "papaya", "grapes", "pineapple"]
console.log(fruitNames.slice(2,4))
console.log(fruitNames)

let fruits = fruitNames.slice()

fruits.push("jackfruit")

console.log(fruitNames)

console.log(fruits)

//concat method  creates a new array includes values from other arrays
// we can insert or push an element into an array without affect the main array
let arr = [1,2]
let newArray = arr.concat([3,4])
console.log(newArray)

let arr5 = [1, 2];

let arrayLike = {
  0: "something",
  1:"sharath",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr5.concat(arrayLike) );

//rarely used in real time

//  forEach method is used to iterate an array

let firstNames = ["sharath", "kumar", "nagalikar"]

//1st task print each element of an array
capnames  = []
firstNames.forEach(function(name){
 // console.log(name.toLocaleUpperCase)
  capnames.push(name.toUpperCase())
});

console.log(firstNames)
console.log(capnames)
//array function syntax for the forEach
firstNames.forEach((name, index,array) =>{
console.log(name, index, array)

}); 

// item ie name we can have access to item
// index to know the index of the item in an array
// array the current array which u are using

let stringValue = "sharathkumarnagalikar"

for (let c of stringValue) {
  console.log(c)
}
//includes method support for string and array
console.log(stringValue.includes(""))

//searching in an array

//indexOf , lastIndexOf, includes

let searchItem = ["john", "paul", "walker"] 

console.log(searchItem.includes("sravan"))

//indexof return is the number returns the index if present otherwise -1

//includes return type is boolean


//find method

//when there are array of objects arr.find(n) comes handy

let users = [
  {id:1, name:"sharath"},
  {id:2, name:"rohith"},
  {id:3, name:"sravan"}
]

let user = users.find(item => item.id < 1);
// undefined is returned if the object is not there 
console.log(user)

//filter 

console.log(users.filter(item => item.id > 3))
//return array of object

// return empty array if the object is not find


//map 

let lowerCaseNames = ["sharath", "kumar"]

let captitalCaseNames =  lowerCaseNames.map(item => item.toLocaleUpperCase())
console.log(captitalCaseNames)