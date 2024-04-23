// Hositing check on scope

// Normal Function 
addOne(4)
function addOne(num){
    console.log(num + 1);
}

// Expression
const addTwo = function(num){
    console.log(num + 2);
}
addTwo(4);
// If we put addTwo(), berfore it's declaration then we will get error