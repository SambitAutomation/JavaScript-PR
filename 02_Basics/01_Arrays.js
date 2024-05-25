let myArr = [ 1, 2, 3, 6, 3, 8];
console.log(myArr);

// push() =>  to add new element in an array at the end -> It'll affect original array
myArr.push(100);
console.log(myArr);

// pop() =>  to remove element from an array at the end -> It'll affect original array
myArr.pop();
console.log(myArr);

// unshift() =>  to add element in an array at the starting -> It'll affect original array
myArr.unshift(32);
console.log(myArr);

// shift() =>  to remove element in an array at the starting -> It'll affect original array
myArr.shift();
console.log(myArr);

// includes() => To check the element available in an array.. will return true/false accordingly
console.log(myArr.includes(10));

// indexOf() => To check the element available in an array.. will return the index accordingly otherwise return -1
console.log(myArr.indexOf(4));

//slice() => First parameter will be starting index & 2nd parameter will be end one which will be not included 
// It'll not affect original array
console.log(myArr.slice(1,4));
console.log(myArr);

//splice() => First parameter will be starting index & 2nd parameter will be end one which will be included 
// It'll affect original array
console.log(myArr.splice(1,4));
console.log(myArr);
