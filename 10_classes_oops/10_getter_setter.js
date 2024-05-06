class User{
    constructor(email, password, name){
        this.email = email;
        this.password = password;
        this.name = name;
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(val){
        this._password = val;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(val){
        this._email = val;
    }
}

const oneUser = new User("a@abc.com", "wwe12", "OneA");
console.log(oneUser.password);
console.log(oneUser.email);
console.log(oneUser.name);