//string conversions


let value = true

console.log(typeof String(value))
console.log(typeof value)

let a = "4", b="12"

console.log(b/a)
console.log(typeof a)

// first it will check the two values are number or not if both are number one will the output is type of  number otherwise NaN
console.log(Number(a))
console.log(Number(b))


console.log(Number("  12356 "))
console.log(Number("  1235+6 ")) // returns NaN
console.log(Number(" "))
console.log(Number(true))
console.log(Number(false))