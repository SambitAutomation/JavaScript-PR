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