const userOne = {
    name: "user",
    fullName :{
        userFullName:{
            firstName: "UN",
            lastName: "LN"
        }
    }
}

console.log(userOne.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

// const obj3 = { obj1, obj2};
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Using spread operator
// const obj3 = {...obj1, ...obj2};
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        email: "uone@gmail.com"
    },
    {
        email: "utwo@gmail.com"
    },
    {
        email: "uthree@gmail.com"
    },
    {
        email: "ufour@gmail.com"
    }
];

console.log(users[3].email);
