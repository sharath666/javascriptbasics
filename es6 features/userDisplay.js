const [user1, user2] = require('./userData.js').users

console.log(user1.name)
console.log(user2)
 let {name:name1} = user1
 let {name:name2} = user2

console.log(name1)
console.log(name2)

