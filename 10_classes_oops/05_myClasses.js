// class

// class User{

//     constructor(userName, email, password){
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}1092`;
//     }

//     changeUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const userOne = new User("FirstUser", "one@o.com", "1ma");
// console.log(userOne.encryptPassword());
// console.log(userOne.changeUserName());

// behid the scene using onlu function

function user(userName, email, password){
    this.userName = userName;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}9981`
}

user.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const testUser = new user("testOne", "testone@gmail.com", "amnn");
console.log(testUser.encryptPassword());
console.log(testUser.changeUserName());