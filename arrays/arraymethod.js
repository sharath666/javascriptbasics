//Array methods

//queue is one of the commons uses of an array. in computer science an ordered collection - push shift


// push - appends an element to the end of the array

//unshift- appends an element to the beginning of the array


//another data structure called stack which also array has we know stack means last in first out 

// pop - removes  the last element of an array
//shift - removes the first element of an array

let array = new Array()

array.push(10)
//adds an element at the end of an array
array.unshift(5)
//adds an element to the begining of an array

array.push(30)
console.log(array)

//stack works on the arrays methods push and pop LIFO
//queue works on the arrays methods push and shift FIFO

let fruits = ["apple", "banana"]
fruits.push("grapes")

fruits.unshift("mango")

console.log(fruits)

fruits.pop()
fruits.shift()
console.log(fruits)


//arrays are mutable

let arr = fruits

console.log(arr)

arr.push("grapes")

console.log(fruits)

fruits.age = 25
console.log(fruits)


let str = "sharath.is.my.full.name"
let  todayDateValue= "24/10/2020"
let name = str
name  = "rohit"
console.log(name)
//string pass by value

let arr1 = ["banana"]

let  fruitNames  = arr1
fruitNames.push("apple")
console.log(arr1)
//pass by reference 




// convertion of string to array 

//split() - This method is used to convert string into array

let name6 = str.split(",")
console.log(name6)

let todayDate = todayDateValue.split("/")
console.log(todayDate)

//array into string 

//join() method is used to convert array to string

let players = ["sachin", "sharath","sravan"]

let tomorrowDate = todayDate.join("-")
console.log(tomorrowDate)


