// Primtive DataYype

// string, number, null, undefined, Symbol, boolean, bigint

const bigNum = 1091830122n;
console.log(typeof bigNum);

const str1 = "OKCool";
console.log(typeof str1);  // string

const num = 9182;
console.log(typeof num); // number

const nullCheck = null;
console.log(typeof nullCheck); // object

const isChecked = true;
console.log(typeof isChecked); // boolean

let defined ;
console.log(typeof defined); // undefined

let id = Symbol("100");
console.log(typeof id);  // symbol
console.log(id);

// ( Reference ) Non - Primitive Type

// Array, Object,  Function

const arr = [ "ok", 11, true, 1002.1];
console.log(typeof arr); // object

const obj = {
    name: "Paris",
    age: 1,
}
console.log(typeof obj); // object

const newFunction = function(){
    console.log("It's a Function");
}
console.log(typeof newFunction); // function

// Stack and Heap memory

// Primitve Value will go to stack memory => Here we will get copy of the value
// Non-Primitve Value will go to Heap memory =>  Here we will get reference of the value

let primiValOne = "CheckIt";
let primiValTwo = primiValOne;
console.log(primiValTwo);

primiValOne = "NotChecked";
console.log(primiValOne);
console.log(primiValTwo);

let obj1 = {
    email: "abc@abc.com"
}

let obj2 = obj1;
obj2.email = "xyz@abc.com";
console.log(obj1.email);
console.log(obj2.email);
// Here refernece will be passed & as obj2 is changing the value means obj1 value also will be changed
