let strName = new String("UserOne Playing");

console.log(strName.toUpperCase()); // USERONE PLAYING
console.log(strName.toLowerCase()); // userone playing

console.log(strName.length); // 15

console.log(strName.substring(0, 4)); // User

console.log(strName.slice(-15, 3)); // Use

console.log("    Rest  "); //     Rest  
console.log("    Rest  ".trim()); // Rest

console.log(strName.charAt(5)); // n
console.log(strName.indexOf('n'))  // 5

let url = "https://localhost:2020/test%20set";
console.log(url.replace("%20", "-")); // https://localhost:2020/test-set

let splitCheck = "Ram is not just a feelings";
console.log(splitCheck.split(" "));  // [ 'Ram', 'is', 'not', 'just', 'a', 'feelings' ]
console.log(splitCheck.split());  // [ 'Ram is not just a feelings' ]
console.log(typeof splitCheck.split(" ")); // object

