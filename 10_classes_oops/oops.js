// constructor function

function User(userName, loggedInCount, isLoggedIn){
    this.userName = userName;
    this.loggedInCount = loggedInCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`UserName = ${this.userName}`);
    }
    return this;
}

// if we user constructor function like this, then the latest updated value will get in result.. we should user "new" keyword
// const userOne = User("One", 3, true);
// const userTwo = User("Two", 5, false);
// console.log(userOne);
// console.log(userTwo);

// Here we will new objects for every defination
const userOne = new User("One", 3, true);
const userTwo = new User("Two", 5, false);
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);