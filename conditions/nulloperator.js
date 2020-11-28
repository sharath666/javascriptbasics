//nullish operator ??

// the nullish coaleashing operator is used to get the first defined value 

console.log(null ?? NaN ?? "operator")

// the empty string is considered as the defined value

let user


console.log(user ?? "sharath" ?? "sravan")

// once we get the first defined value it will come out of that loop

// the nullish coaleshing operator works almost  to the OR operator and it is recently added to the javascript
let height = ""
console.log(height || 100)
console.log(height ?? 100)
        
console.log(("" ?? 3) ||  (5 ?? undefined))

//due to safety reasons the javascript forbiden ??  so we are syntax error

console.log(2!=2&&3!=1)
//NOT AND OR
//console.log(1+4*2) 

//since or || AND && and NOT !  are used mostly so the JIT have a clear idea of the precedence