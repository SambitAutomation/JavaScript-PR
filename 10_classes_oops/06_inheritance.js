class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        return `User Name is ${this.username}`
    }
}

class Employee extends user{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addEmp(){
        return `A new Employee has added with name :- ${this.username}`
    }
}

const empOne = new Employee("Harsh", "g@kal.com", "2321a");

// console.log(empOne.addEmp());
// console.log(empOne.logMe());

const userOne = new user("Syam");
console.log(userOne.logMe());
// console.log(userOne.addEmp());
console.log(userOne instanceof user);
console.log(empOne instanceof user);
console.log(empOne instanceof Employee);
console.log(userOne instanceof Employee);