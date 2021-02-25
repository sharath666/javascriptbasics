let arr = ["Ilya", "Kantor"]

console.log(arr[0])
let [firstName, surname] = arr;

console.log(surname)

//array destructing 

//Now we can work with variables instead of array members.

//we can work with the variables instead of array members

let [firstname, surName] = "sharath kumar".split(" ")

let message= "hihello"
console.log(message[0])

console.log(firstname)
console.log(surName)

let [firstName1,title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(title)

let [a, b, c,e] = "abcd";
console.log(c)

let x = 10;
let y = 20;

// Swap values: make guest=Pete, admin=Jane
[x, y] = [y, x];

console.log(x)


let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1)

console.log(rest)