const score = 500;
console.log(score); // 500

const score2 = new Number(100);
console.log(score2); // [Number: 100]

let num = 100;
console.log(num.toFixed(2)); // 100.00

let num2 = 10.79
console.log(num2.toPrecision(2)); // 11

let num3 = 1000000;
console.log(num3.toLocaleString()); // 1,000,000
console.log(num3.toLocaleString("en-IN")); // 10,00,000 [ Indian Standard ]


// ******************  Math *********************

console.log(Math.abs(-10)); // 10
console.log(Math.sqrt(100)); // 10
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+ 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + max);