const mySym = Symbol("key1");

let myObj = {
    name: "Raja",
    [mySym]: "keys11",
    "full name": "Raja Dhira",
    email: "raja@gl.com",
    isAlive: true,
    troops: [ "Palam", "Rajasz"]
}

console.log(myObj.name);
console.log(myObj["full name"]);

myObj.email = "raja@india.com";
console.log(myObj);
// Object.freeze(myObj);
myObj.email = "raja@indias.com";
console.log(typeof myObj[mySym]);

myObj.greet = function(){
    console.log("welcome user");
}
myObj.greet2 = function(){
    console.log(`welcome user, ${this["full name"]}`);
}

console.log(myObj);
console.log(myObj.greet2());