const user = {
    username: "Sam",
    age: 28,
    welcomeMessage: function (){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "UserOne";
// user.welcomeMessage();

function oneTest(){
    console.log(this);
}
// For normal function, we will get return of this
// oneTest();

const newTest = () => {
    let username = "test";
    console.log(this);  // for expression, we will get blank object
    console.log(this.username); // By using this, we can't access local variables
    console.log(username); // By this, we can get the data.
}

// newTest();


const addTwoNum1 = (num1, num2) =>{
    return num1 + num2;
}

const addTwoNum2 = (num1, num2) => num1 + num2;

const addTwoNum3 = (num1, num2) => (num1 + num2);

const test = () => ({userTest: test}); // This way also, we can access the data

console.log(test());
