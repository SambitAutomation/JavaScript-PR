const chai = {
    name: "Ginger Chai",
    Price: 5,
    isAvailable: true,
    makeIt: function(){
        console.log(`You can Do it`);
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        
        console.log(`${key} : ${value}`);
    }
}