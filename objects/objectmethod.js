// function to method

let user = {
    name:"john",
    age:30,
}

user.sayhi = function(){
    return "hello"
}

console.log(user.sayhi()) 


//A function that is a property of an object is called its method.

let user1 = {
    name:"sharath",
    sayHi(){
        return "hello"
    }
}
console.log(user1.sayHi())



//this keyword 

//To access the object, a method can use the this keyword.

let user2 = {
    name: "sravan",
    sayHi(){
        return this.name
    }
}

console.log(user2.sayHi())

//why this instead of user

admin = user2

user2 = null


let user6 = { name: "John" };
let admin1 = { name: "Admin" };

function sayHi() {
 return this.name ;
}

user6.f = sayHi
console.log(user6)
console.log(user6.f())
admin1.f = sayHi
console.log(admin1.f())

// in strict mode returns undefined and in the non strict mode return the global window object
function sayHi1() {
    console.log(this);
  }
  
  sayHi1(); // undefined


  let user9 = {
      name: "sharath",
      greeting: function(){
          return `${this.name} is welcoming you`
      }
  }

  console.log(user9.greeting())
  console.log(user9)



  let hi = function(){
    console.log("hi")
  }


  user10 = {
    sayHi() { // same as "sayHi: function()"
      return "Hello" ;
    }
  };
  
  console.log(user10)