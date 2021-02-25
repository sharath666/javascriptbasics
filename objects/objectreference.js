

let name1 = "sharath"
let name2 = "sharath"

console.log(name1 == name2)
let a = {} 

let b = {} 
b.name = "sharath"

console.log(b)
console.log( a ==b)

// in array slice method is there to take a copy of array

// in object to copy all the property we will do the following
let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user) {
    clone[key] = user[key];
  }

  clone.name = "sharath"
  console.log(clone)
  console.log(user)


  let number = 12345

  console.log(number.toString())

  // wrapping any variable or expression into the string


  function name(personName){
      return `${personName} welcome `

  }

  console.log(name("sravan"))