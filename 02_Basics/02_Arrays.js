let marvel_heros = [ "IronMan", "Thor", "CaptainAmerica"];
let dc_heros = [ "BatMan", "Flash", "SuperMan"];;

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  // ['IronMan','Thor', 'CaptainAmerica',[ 'BatMan', 'Flash', 'SuperMan' ]]

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);  // ['IronMan','Thor', 'CaptainAmerica',[ 'BatMan', 'Flash', 'SuperMan' ]]

// Here we used Spread Operator
// let all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros); // [ 'IronMan', 'Thor', 'CaptainAmerica', 'BatMan', 'Flash', 'SuperMan' ]

//flat() method => whatever array of array of will there, it'll give us a sinle array
let newArr = [1, 2, [4, 5, 6], 1, [6, 7, 8,[2, 4, 7]]];
console.log(newArr.flat(Infinity)); //[1, 2, 4, 5, 6, 1, 6, 7, 8, 2, 4, 7]

console.log(Array.isArray("TestIt")); // false => it will check given element available or not
console.log(Array.from("TestIt")); // [ 'T', 'e', 's', 't', 'I', 't' ] => It will covert it into an array
console.log(Array.from({name: "OK"})); // [] => it'll provide empty array ( we need to explicitly provide key/values, we nedd to make an array)

const s1 = 100;
const s2 = 200;
const s3 = 300;

console.log(Array.of(s1, s2, s3)); // [ 100, 200, 300 ] => It'll covert it into an array by the ptovided elemnets
