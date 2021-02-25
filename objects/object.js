// object is a non-primitive datatype so we can store multiple values 

//in object the key pair is called as property

// syntax to object declaration  is of 2 types 

let name = new Object();

let name1 = {};
//normally second syntax we will be using more in coming days


let user  ={
    name:"sharath",
    age:26
}

let user1 = user

// key  will be always string but the value may be anything

user.isAdmin = true
// add the property to the object user

console.log(user)

delete user.age
console.log(user1)

console.log(user)

//by pass by reference the user1 object also has been updated

// if the key is multiword then key name should be in double quotes

user["likes bird"] = true // multiword
user["name"] = 'sravan' 
console.log(user)

// if the  key name is already present in the object it will take the latest value

console.log(user.age === undefined)

//other way  in operator



// let promise = new Promise()
//  promise =(a)=>{
//     a.map( item => item > 0 ? item: "not a positve number")
// }
// promise.then(
//     (message)=>{
//         console.log("resolve:" + message)
//     },
//     (message) => { 
//         console.log("Then failure:" + message); 
//       } 

// )

// console.log(promise([-1,-2]))


function reverseNumber(number) {
    var revNumber = 0;
    while (number > 0) {
      revNumber = (revNumber * 10) + (number % 10);
      number = Math.floor(number / 10);
    }
    return revNumber;
  }
  console.log(reverseNumber(8706))