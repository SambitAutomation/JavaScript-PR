const myHero = ["Spidy", "IronMan"];

const heroPower = {
    spidy: "jump",
    ironMan: "fly",

    getPowerName: function(){
        console.log(`IroMan can ${this.ironMan}`);
    }
}

Object.prototype.testM = function(data){
    console.log(`Yes, It's working ${data}`);
}

Array.prototype.newTestMd = function(){
    console.log(`Only dedicated for Array`);
}

// heroPower.testM("obj");
// myHero.testM("arr");
// myHero.newTestMd();
// heroPower.newTestMd();

// inheritance

// old syntax
const teacher = {
    video :true,
    name: "JS"
}

const newuser = {
    newName: "Unknowns"
}

const teachingSupport = {
    fullTime: true,
    __proto__: teacher
}

// console.log(teachingSupport.name);

// New/Modern Syntax
Object.setPrototypeOf(teacher, newuser);
// console.log(teacher.newName);

// For String setting Prototype

const newData = "DataIsf   ";

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`Now length is ${this.trim().length}`);
}

newData.trueLength();
"SAM".trueLength();


