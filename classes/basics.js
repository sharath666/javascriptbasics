class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  
  }
  
  // Usage:
  let user = new User("John"); //  new is a class method  which calls constructor
  console.log(user)