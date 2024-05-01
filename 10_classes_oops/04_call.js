function setUserName(username){
    this.username = username;
    console.log("called");
}

function createUser(username, pwd, email){
    setUserName.call(this, username);
    this.pwd = pwd;
    this.email = email;
}

const firstUser = new createUser("OneUs", "122", "one@one.com");
console.log(firstUser);