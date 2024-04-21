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

