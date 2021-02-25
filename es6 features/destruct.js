
let person = {
    firstName:"sharath",
    lastName:"nagalikar",
    country:"INDIA"
}

//es5 var firstName = person.firstName

//object destructing

let {firstName:fname} = person
console.log(fname)

let {country ="india"} = person
console.log(person)
console.log(country)
let country = "america"
console.log(country)


