function addTwoNumbers( num1, num2){
    return num1 + num2;
}

console.log(addTwoNumbers(1,2));

function checkLoggedInUser(userName){

    if(userName === undefined || userName === ""){
        console.log("Enter your username");
        return;
    }
    return `${userName} just logged In`
}

console.log(checkLoggedInUser(""));

// Functions with objects and array

//rest operator ( will show in ...name format and it will converts the values in an array)
function numbersSetFunc(val1, val2, ...num){
    return num;
}

console.log(numbersSetFunc(100, 200, 399,822)); // [ 399, 822 ]

const user = {
    name: "samt",
    score: 10
}

function objectFunction(userObj){
    console.log(`Username is ${userObj.name} and score is ${userObj.score}`);
}

objectFunction(user); // Username is samt and score is 10


function arrayFunction(arr){
    return arr[1];
}

console.log(arrayFunction([100,200,112])); // 200