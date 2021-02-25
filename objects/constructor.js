// constructor is used to create new instance of object

function User(name, isAdmin) {
    this.name = name;  //properties
    this.isAdmin = isAdmin;
  }

  let user = new User("Jack");
console.log(user)
//in parameter error
//{}

/*
when we call  new function

function User(name) {
    // this = {};  (implicitly)
  
    // add properties to this
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (implicitly)
  }

  */

  //That’s the main purpose of constructors – to implement reusable object creation code.


 let  user1 = {
      name:"john"
  }

  console.log(user1?.address?.street)


  let userAdmin = {
    admin() {
      console.log("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.()