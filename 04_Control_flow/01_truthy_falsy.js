// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// "0", 'false', " ", [], {}, function(){}

let userEmail = [];
if(userEmail){
    console.log("Got email");
}else{
    console.log("Didn't get");
}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const empObj = {};
if(Object.keys(empObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) null, undeined
let val ;
val = 5 ?? 10;
val = null ?? 10;
val = undefined ?? 101;
val = null ?? 34 ?? 988

console.log(val);


// Ternary Operator

// condition ? true : false
const cup = 100;
cup >= 809 ? console.log("Price is high"): console.log("Price is low");;