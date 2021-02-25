// // const person = {
// //     firstName: "sharath",
// //     lastName: "nagalikar"
// // }
// // // it u try to destruct a the property that doesn't exist it will return undefined
// // const {firstName, lastName} = person

// // console.log(firstName)

// // //const {country = 'india'} = person

// // console.log(person)

// // const {country:c = 'india'} = person

// // console.log(person)



// const details = {
//     firstName: 'sachin',
//     lastName :'tendular',
//     place:'india'
// }

// // 
// const {place = "India"} = details
// console.log(place)
// //console.log(details.firstName)

// const {firstName, lastName} = details

// console.log(firstName)

// console.log(lastName)

const person = {
    firstName:"rahul",
    lastName:"dravid",
    country:"India"
}


/* var firstName = person.firstName

*/

let {firstName, lastName}


 const {firstName:Name, lastName:lastname} = person
console.log(Name)
//console.log(country)

const {firstName, lastName,country="india"} = person
//if the person object contains the same keyname 
console.log(country)
console.log(person)

console.log(Name)
console.log(lastName)
console.log(person.country)

//you can destructure, fiven ans alias and assign a default value 

const {address:ad= "hutti gold mines"} = person
console.log(address)