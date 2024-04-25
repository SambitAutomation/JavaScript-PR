for(let i=1;i<=10;i++){
    console.log(`Outer table is ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(`${i} of ${j} is ${ i * j}`);
        
    }
    console.log(`******************************`);
}

// break
for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log(`Just got value ${i}`);
        break;
    }
    console.log(`Value is ${i}`);
    
}

// continue
for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log(`Just got value ${i}`);
        continue;
    }
    console.log(`Value is ${i}`);
    
}

// for of Loop

// For Array Object
let arr = [ 1, 3, 6, 9, 7, 11];
for(let i of arr){
    console.log(i);
}

// For String
let myWorld = "World Here!";
for(let i of myWorld){
    console.log(`Each Character is :- ${i}`);
}

// Map
let map = new Map();
map.set('IN', 'INDIA');
map.set('RS', 'RUSSIA');
map.set('FR', 'FRANCE');

// console.log(map);

for(let [key, val] of map){
    console.log(`${key} = ${val}`);
}

// for in Loop

// for Object checking
const myObj = {
    java: "JAVA",
    cpp: "C++",
    swixt:"SWIFT"
}

for(let key in myObj){
    // console.log(key);
    console.log(myObj[key]);
}

// for array checking

let arr1 = [ "java", "android", "js"];
for(let key in arr1){
    console.log(arr1[key]);
}

// for Map checking

let map1 = new Map();
map1.set('IN', 'INDIA');
map1.set('RS', 'RUSSIA');
map1.set('FR', 'FRANCE');

for(let key in map1){
    console.log(key); // maps are not iterable
}

// forEach Loop

const arr2 = ["java", "android", "js", "Angular"];

arr2.forEach((item) =>{
    console.log("-------------");
    console.log(item);
})

const newArrayObj = [
{
    langName: "Java"
},
{
    langName: "JS"
},
{
    langName: "SQL"
},
{
    langName: "CSS"
},
];

newArrayObj.forEach((item) =>{
    console.log(item.langName);
})

// forEach method doesn't return any value...

// filter
// Based on some condition, it will return some value
const myNums = [ 1, 2, 5, 7, 9, 3];

// let vals = myNums.filter((num) => num > 5);

let vals = myNums.filter((num) => {
    return num > 5
});

console.log(vals);

