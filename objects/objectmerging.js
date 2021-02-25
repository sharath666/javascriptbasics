// object.assign

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };


permissions1.canCreate = true;
console.log(permissions1)
Object.assign(user, permissions1, permissions2);

// Object assign will be used to copy all the properties of object to the destination object 
console.log(user)


//if there an object inside the object and we have created a new independent object using object.assign so the objects inside the object will be same for both independent object and main object 