// let details = {
//     firstName:"sharath",
//     secondName:"n",
//     place: function(){
//         return 'bangalore'
//     }
// }

// //es5 
// console.log(details)

// //writing in es6 

let person = {
    firstName: "sravan",
    lastName:"g",
    place(){
        'bangalore'
    }
}

// console.log(person)


// let [firstName, LastName] = ["sharath", "nagalikar"]

// console.log(firstName)

let {firstName,place} =person
console.log(firstName)
console.log(place)


