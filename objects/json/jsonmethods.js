let user = {
    name: 'rohith',
    place: 'kerala',
    sayHi(){
    return "hello"    
    }
}

//any property key name holder a function will be taken while converting that object into json

let jsonObject = JSON.stringify(user)
//conerting object to string
console.log(jsonObject)


let parsedObject = JSON.parse(jsonObject)

console.log( parsedObject)



let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };
  
  meetup.place = room;
room.occupiedBy = meetup
  console.log(JSON.stringify(meetup))