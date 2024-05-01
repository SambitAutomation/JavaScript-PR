class user{
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`UserName: ${this.userName}`);
    }

    static createId(){
        console.log(`${Math.round(Math.random()*10+1)}`);
    }
}

const uOne = new user("Sam");
uOne.logMe();
// uOne.createId();
user.createId();