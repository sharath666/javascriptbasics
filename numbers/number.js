// regular numbers are stored in javascript called as "double precision floating numbers" and these are numbers we will be using most frequently

// bigInt are used for storing numbers of arbitary length 


//let number = 1000000
    let number = 1e6
    console.log(typeof(number))

    let ms = 1e-6; // six zeroes to the left from 1
    console.log(ms) 


    let red = 0xff
    console.log(typeof(red))

    let red1 = 0b11111111

    console.log(typeof(red1))

    console.log( red === red1)

    let name = "sharath"
    let firstName = "sharath"


    console.log(name === firstName)
    
    let piValue = '3.142a'
    console.log(parseInt(piValue))


    let floorNumber =  '3.74'
    console.log(Math.floor(floorNumber))

    // floor method is used to convert a floating number to Integer 1 rounds down

    let ceilNumber = 4.1
    console.log(Math.ceil(ceilNumber))
    

    let roundNumber = 9.00012
    console.log(Math.round(roundNumber))



    //toFixed

// to Fixed method is used to round the number after the point with the number given by the user

let number1 =  12.34
console.log(Number(number1.toFixed(1)))

//whenever we use toFixed method it will convert the floating point number to string


console.log(Number((0.1+0.2).toFixed(1)))


//isNaN is the method used to check the value is a number or not a number and return type is boolean

//if the value is the number then isNaN returns false

//if the value is not a number then isNaN returns true


//parseFloat


console.log(parseFloat((10.12303 + 90.1212121).toFixed(2)))

console.log(Math.random())

